<script lang="ts">
  import Phaser from 'phaser'
  import {
    Sprite,
    ArcadePhysics,
    getScene,
    onGameEvent,
    ArcadeCollider,
  } from 'svelte-phaser'

  export let x: number
  export let y: number

  let flipX = false
  let velocityX = 0
  let velocityY = 0
  let animation = 'idle'

  let instance: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }

  const scene = getScene()
  const X_SPEED = 100
  const keys = {
    left: scene.input.keyboard.addKey('left'),
    right: scene.input.keyboard.addKey('right'),
    up: scene.input.keyboard.addKey('up'),
    jump: scene.input.keyboard.addKey('SPACE'),
  }

  class KeysAndButtons {
    static jump = {
      get justDown() {
        return Phaser.Input.Keyboard.JustDown(keys.jump) || (scene.input.gamepad.pad1 && scene.input.gamepad.pad1.A);
      }
    }
    static left = {
      get isDown() {
        return keys.left.isDown || (scene.input.gamepad.pad1 && scene.input.gamepad.pad1.left);
      }
    }
    static right = {
      get isDown() {
        return keys.right.isDown || (scene.input.gamepad.pad1 && scene.input.gamepad.pad1.right);
      }
    }
  }

  // handle key inputs
  onGameEvent('step', () => {
    if (
      (!KeysAndButtons.left.isDown && !KeysAndButtons.right.isDown) ||
      (KeysAndButtons.left.isDown && KeysAndButtons.right.isDown)
    ) {
      velocityX = 0
    } else if (KeysAndButtons.left.isDown) {
      velocityX = -X_SPEED
      flipX = true
    } else if (KeysAndButtons.right.isDown) {
      flipX = false
      velocityX = X_SPEED
    }

    if (KeysAndButtons.jump.justDown && instance.body.onFloor()) {
      velocityY = -225
      animation = 'jump'
    } else if (Phaser.Input.Keyboard.JustUp(keys.jump) && velocityY < 0) {
      velocityY = 1
    }
  })

  $: if (velocityY === 0) {
    if (velocityX !== 0) {
      animation = 'run'
    } else {
      animation = 'idle'
    }
  }

  $: if (velocityY < 0 && animation !== 'fall') {
    animation = 'jump'
  } else if (velocityY > 0) {
    animation = 'fall'
  }

  function onAnimationComplete({ detail }) {
    if (detail.animation.key === 'anims/mario/jump') {
      animation = 'fall'
    }
  }
</script>

<Sprite
  name="mario"
  bind:instance
  bind:x
  bind:y
  animation={`anims/mario/${animation}`}
  on:animationcomplete={onAnimationComplete}
  {flipX}
>
  <ArcadePhysics
    collideWorldBounds
    bind:velocityX
    bind:velocityY
    width={21}
    height={27}
  />
  <ArcadeCollider with="ground" />
</Sprite>
