<script lang="ts">
    import Phaser from 'phaser'
    import {
      Sprite,
      ArcadePhysics,
      ArcadeCollider,
    } from 'svelte-phaser'
  
    export let x: number
    export let y: number
  
    let flipX = false
    let velocityX = -19
    let velocityY = 0
    let animation = 'default'
  
    let instance: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }
  </script>
  
  <Sprite
    name="babyfish"
    bind:instance
    bind:x
    bind:y
    animation={`anims/babyfish/${animation}`}
    {flipX}
  >
    <ArcadePhysics
      collideWorldBounds
      bind:velocityX
      bind:velocityY
      width={13}
      height={12}
      allowGravity={false}
    />
    <ArcadeCollider with="ground" />
  </Sprite>  