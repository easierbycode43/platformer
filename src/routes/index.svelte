<script lang='ts'>
  import Phaser from 'phaser'
  import {
    Game,
    Scene,
    Camera,
    ObjectLayer,
    Tilemap,
    TileLayer,
    Spawner,
  } from 'svelte-phaser'
  import LoadingBar from './LoadingBar.svelte'
  import Player from './Player.svelte'
  import Lakitu from './Lakitu.svelte'
  import Chomp from './Chomp.svelte'
  import Fish from './Fish.svelte'
  import BigFish from './BigFish.svelte'
  import Skelly from './Skelly.svelte'
  import Bobomb from './Bobomb.svelte'
  import BabyFish from './BabyFish.svelte'
  import Chucka from './Chucka.svelte'
  import Wall from './Wall.svelte'
  import Ryu from './Ryu.svelte'

  let game

  $: window.game = game

  function preload(scene) {
    scene.load.tilemapTiledJSON('tilemaps/castle', 'assets/tilemap.json')
    // scene.load.tilemapTiledJSON('tilemaps/castle', 'assets/level2.json')
    scene.load.image('tilesets/castle', 'assets/castle-tileset.png')
    scene.load.spritesheet('textures/bigfish', 'assets/big-fish.png', {
      frameWidth: 24,
      frameHeight: 32,
    })
    scene.load.spritesheet('textures/babyfish', 'assets/baby-fish.png', {
      frameWidth: 13,
      frameHeight: 12,
    })
    scene.load.spritesheet('textures/bobomb', 'assets/bobomb.png', {
      frameWidth: 16,
      frameHeight: 16,
    })
    scene.load.spritesheet('textures/ryu', 'assets/ryu.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
    scene.load.spritesheet('textures/chucka', 'assets/chucka.png', {
      frameWidth: 16,
      frameHeight: 15,
    })
    scene.load.spritesheet('textures/skelly', 'assets/skelly-fish.png', {
      frameWidth: 24,
      frameHeight: 15,
    })
    scene.load.spritesheet('textures/chomp', 'assets/chomp-ball.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
    scene.load.spritesheet('textures/fish', 'assets/lipstick-fish.png', {
      frameWidth: 16,
      frameHeight: 16,
    })
    scene.load.spritesheet('textures/lakitu', 'assets/lakitu.png', {
      frameWidth: 20,
      frameHeight: 32,
    })
    scene.load.spritesheet('textures/mario', 'assets/mario.png', {
      frameWidth: 21,
      frameHeight: 27,
    })
    scene.load.spritesheet('textures/mario/particles', 'assets/mario-particles.png', {
      frameWidth: 2,
      frameHeight: 2,
    })
    scene.load.spritesheet('textures/player', 'assets/adventurer.png', {
      frameWidth: 50,
      frameHeight: 37,
    })
    scene.load.spritesheet('textures/wall', 'assets/wall-of-death.png', {
      frameWidth: 38,
      frameHeight: 216,
    })

    scene.load.audio('sounds/bgmusic', 'assets/duaniac.mp3')
  }

  function create(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'anims/bigfish/default',
      frames: scene.anims.generateFrameNumbers('textures/bigfish'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/babyfish/default',
      frames: scene.anims.generateFrameNumbers('textures/babyfish'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/chucka/default',
      frames: scene.anims.generateFrameNumbers('textures/chucka'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/bobomb/default',
      frames: scene.anims.generateFrameNumbers('textures/bobomb'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/ryu/default',
      frames: scene.anims.generateFrameNumbers('textures/ryu'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/skelly/default',
      frames: scene.anims.generateFrameNumbers('textures/skelly'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/chomp/default',
      frames: scene.anims.generateFrameNumbers('textures/chomp'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/fish/default',
      frames: scene.anims.generateFrameNumbers('textures/fish'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/lakitu/default',
      frames: scene.anims.generateFrameNumbers('textures/lakitu'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/mario/idle',
      frames: scene.anims.generateFrameNumbers('textures/mario', {
        start: 2,
        end: 2,
      }),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/mario/run',
      frames: scene.anims.generateFrameNumbers('textures/mario', {
        start: 0,
        end: 2,
      }),
      frameRate: 8,
      repeat: -1,
    })
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
    scene.anims.create({
      key: 'anims/wall/default',
      frames: scene.anims.generateFrameNumbers('textures/wall'),
      frameRate: 6,
      repeat: -1,
    })
    
    scene.bgMusic = scene.sound.add( 'sounds/bgmusic' );

    scene.bgMusic.play({ loop: true })
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
        <ObjectLayer id="enemies" components={{ BabyFish, BigFish, Bobomb, Chomp, Chucka, Fish, Lakitu, Ryu, Skelly, Wall }} />

      </Tilemap>
    </Spawner>
    <Camera
      x={0}
      y={0}
      width={384}
      height={216}
      follow="mario"
      roundPixels
      bounds={{ x: 0, y: 0, width: (144 * 16), height: (27 * 16) }}
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
