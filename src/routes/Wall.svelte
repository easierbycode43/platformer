<script lang="ts">
    import Phaser from 'phaser'
    import {
      Sprite,
      ArcadePhysics,
      ArcadeCollider,
    } from 'svelte-phaser'
  
    export let x: number
    export let y: number
  
    let velocityX = 15
    let velocityY = 0
    let animation = 'default'
  
    let instance: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }
  </script>
  
  <Sprite
    name="wall"
    bind:instance
    bind:x
    bind:y
    animation={`anims/wall/${animation}`}
    originX={0}
    originY={0}
  >
    <ArcadePhysics
      collideWorldBounds
      bind:velocityX
      bind:velocityY
      width={38}
      height={216}
      allowGravity={false}
    />
    <ArcadeCollider with="mario" />
  </Sprite>  