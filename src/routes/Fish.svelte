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
    let velocityX = -5
    let velocityY = 0
    let animation = 'default'
  
    let instance: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }
  </script>
  
  <Sprite
    name="fish"
    bind:instance
    bind:x
    bind:y
    animation={`anims/fish/${animation}`}
    {flipX}
  >
    <ArcadePhysics
      collideWorldBounds
      bind:velocityX
      bind:velocityY
      width={20}
      height={32}
      allowGravity={false}
    />
    <ArcadeCollider with="ground" />
  </Sprite>  