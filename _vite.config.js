// const svelte = require('@svitejs/vite-plugin-svelte')
// const { defineConfig } = require('vite')
import * as svelte from '@svitejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  /**
   * @type {import('vite').UserConfig}
   */
  return {
    plugins: [
      svelte({
        hot: true,
      }),
    ],
    build: {
      minify: isProduction,
    },
    resolve: {
      alias: {
        phaser:
          mode === 'production'
            ? 'phaser/dist/phaser.min.js'
            : 'phaser/src/phaser.js',
      },
    },
    rollupDedupe: [
      'svelte/animate',
      'svelte/easing',
      'svelte/internal',
      'svelte/motion',
      'svelte/store',
      'svelte/transition',
      'svelte',
      'phaser',
    ],
    optimizeDeps: {
      include: ['phaser'],
      exclude: ['svelte-phaser'],
    },
    define: !isProduction
      ? {
          // fix global.Phaser assignment in phaser/src/phaser.js
          global: {},
        }
      : {},
  }
})
