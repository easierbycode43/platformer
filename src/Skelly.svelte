<script lang="ts">
    import Phaser from 'phaser'
    import {
      Sprite,
      ArcadePhysics,
      ArcadeCollider,
    } from 'svelte-phaser'
  
    export let x: number
    export let y: number
  
    let flipX = true
    let velocityX = 3
    let velocityY = 0
    let animation = 'default'
  
    let instance: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }
  </script>
  
  <Sprite
    name="skelly"
    bind:instance
    bind:x
    bind:y
    animation={`anims/skelly/${animation}`}
    {flipX}
  >
    <ArcadePhysics
      collideWorldBounds
      bind:velocityX
      bind:velocityY
      width={20}
      height={15}
      allowGravity={false}
    />
    <ArcadeCollider with="ground" />
  </Sprite>  