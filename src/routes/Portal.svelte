<script lang="ts">
    
    import { onMount } from "svelte";
    import { getScene } from "svelte-phaser";
  
    export let x: number = 16
    export let y: number = 994
    export let dir: string = 'down'
    export let width: number
    export let height: number
    export let spawnX: number
    export let spawnY: number

    let scene = getScene()


    onMount(async () => {

        interface IPortalDestination {
            x: number;
            y: number;
            dir: string;
        }

        interface IPortalConstructor {
            scene: Phaser.Scene;
            spawn: IPortalDestination;
            x: number;
            y: number;
            width?: number;
            height?: number;
        }

        class Portal extends Phaser.GameObjects.Zone {
            declare body: Phaser.Physics.Arcade.Body;

            // variables
            private currentScene: Phaser.Scene;
            private portalDestinationForMario: IPortalDestination;

            public getPortalDestination(): IPortalDestination {
                return this.portalDestinationForMario;
            }

            constructor(aParams: IPortalConstructor) {
                super(aParams.scene, aParams.x, aParams.y, aParams.width, aParams.height);

                // variables
                this.currentScene = aParams.scene;
                this.portalDestinationForMario = aParams.spawn;

                this.initZone();
                this.currentScene.add.existing(this);
            }

            private initZone() {
                this.setOrigin(0, 0);

                // physics
                this.currentScene.physics.world.enable(this);
                this.body.setSize(this.height, this.width);
                this.body.setOffset(0, 0);
                this.body.setAllowGravity(false);
                this.body.setImmovable(true);
            }

            update(): void {}
        }

        let fooPortal = new Portal({
            x,
            y,
            width,
            height,
            scene,
            spawn: {
                x: spawnX,
                y: spawnY,
                dir
            }
        })


        console.log({ fooPortal });
    })
  </script>