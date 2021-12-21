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
    name="chucka"
    bind:instance
    bind:x
    bind:y
    animation={`anims/chucka/${animation}`}
    {flipX}
  >
    <ArcadePhysics
      collideWorldBounds
      bind:velocityX
      bind:velocityY
      width={16}
      height={15}
    />
    <ArcadeCollider with="ground" />
  </Sprite>