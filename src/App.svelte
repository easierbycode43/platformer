<script>
  import Phaser from 'phaser'
  import {
    Game,
    Scene,
    Camera,
    Tilemap,
    TileLayer,
    Spawner,
  } from 'svelte-phaser'
  import LoadingBar from './LoadingBar.svelte'
  import Player from './Player.svelte'

  let game

  $: window.game = game

  function preload(scene) {
    scene.load.tilemapTiledJSON('tilemaps/castle', 'assets/tilemap.json')
    scene.load.image('tilesets/castle', 'assets/castle-tileset.png')
    scene.load.spritesheet('textures/mario', 'assets/mario.png', {
      frameWidth: 21,
      frameHeight: 27,
    })
    scene.load.spritesheet('textures/player', 'assets/adventurer.png', {
      frameWidth: 50,
      frameHeight: 37,
    })
  }

  function create(scene) {
    scene.anims.create({
      key: 'anims/mario/idle',
      frames: scene.anims.generateFrameNumbers('textures/mario', {
        start: 2,
        end: 2,
      }),
      frameRate: 6,
      repeat: -1,
    })
    // scene.anims.create({
    //   key: 'anims/player/idle',
    //   frames: scene.anims.generateFrameNumbers('textures/player', {
    //     start: 0,
    //     end: 3,
    //   }),
    //   frameRate: 6,
    //   repeat: -1,
    // })
    scene.anims.create({
      key: 'anims/mario/run',
      frames: scene.anims.generateFrameNumbers('textures/mario', {
        start: 0,
        end: 2,
      }),
      frameRate: 8,
      repeat: -1,
    })
    // scene.anims.create({
    //   key: 'anims/player/run',
    //   frames: scene.anims.generateFrameNumbers('textures/player', {
    //     start: 8,
    //     end: 13,
    //   }),
    //   frameRate: 8,
    //   repeat: -1,
    // })
    scene.anims.create({
      key: 'anims/mario/jump',
      frames: [
        { key: 'textures/mario', frame: 0 },
        { key: 'textures/mario', frame: 2 },
        { key: 'textures/mario', frame: 3 },
        { key: 'textures/mario', frame: 4 },
        { key: 'textures/mario', frame: 5 },
        { key: 'textures/mario', frame: 6 },
        { key: 'textures/mario', frame: 2 },
        { key: 'textures/mario', frame: 0 }
      ],
      frameRate: 24,
    })
    scene.anims.create({
      key: 'anims/mario/fall',
      frames: [
        { key: 'textures/mario', frame: 0 }
      ],
      frameRate: 10,
      repeat: -1,
    })
  }
</script>

<Game
  bind:instance={game}
  width={384}
  height={216}
  physics={{ default: 'arcade', arcade: { gravity: { y: 800 } } }}
  render={{ pixelArt: true }}
  scale={{ mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }}
  backgroundColor='#80A8F8'
  input={{ gamepad: true }}
>
  <Scene
    key="main"
    {preload}
    {create}
    let:progress
  >
    <slot slot="loading">
      <LoadingBar x={128} y={112} {progress} />
    </slot>

    <Spawner>
      <Tilemap
        key="tilemaps/castle"
        tilesets={[{ key: 'tilesets/castle', name: 'castle-tileset' }]}
      >
        <TileLayer
          id="ground"
          name="ground"
          tilesets={['castle-tileset']}
          collisionByProperty={{ collision: true }}
        />
        <TileLayer id="bg" tilesets={['castle-tileset']} />

      </Tilemap>
    </Spawner>
    <Camera
      x={0}
      y={0}
      width={384}
      height={216}
      follow="mario"
      roundPixels
      bounds={{ x: 0, y: 0, width: (32 * 16), height: (16 * 16) }}
    >
      <Player x={124} y={124} />
    </Camera>
  </Scene>
</Game>

<style>
  :global(body) {
    margin: 0;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
