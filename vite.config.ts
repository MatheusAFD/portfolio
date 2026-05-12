import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    watch: {
      ignored: ['**/routeTree.gen.ts'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      srcDirectory: 'src',
      spa: {
        enabled: true,
        prerender: {
          outputPath: '/index',
          crawlLinks: false,
        },
      },
    }),
    viteReact(),
    nitro({
      preset: 'node-server',
      prerender: {
        autoSubfolderIndex: false,
      },
    }),
  ],
})
