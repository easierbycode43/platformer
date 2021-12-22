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
    let velocityX = 0
    let velocityY = 0
    let animation = 'default'
  
    let instance: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }
  </script>
  
  <Sprite
    name="ryu"
    bind:instance
    bind:x
    bind:y
    animation={`anims/ryu/${animation}`}
    {flipX}
  >
    <ArcadePhysics
      collideWorldBounds
      bind:velocityX
      bind:velocityY
      width={32}
      height={32}
    />
    <ArcadeCollider with="ground" />
  </Sprite>  