//import { defineConfig } from 'vite'
//import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [svelte()],
//})
//
//
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path';
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),viteSingleFile()],
  build: {
    outDir: "dist",
    rollupOptions: {
            input: { 
              page: resolve(__dirname,'about.html'),
            },
            output: {
              inlineDynamicImports: false,
                //file: 'bundle.html'
                //dir: 'dist',
                //entryFileNames: 'bundle.html',
                //entryFileNames: 'bundle_[name].js',
                //assetFileNames: 'bundle_[name].css',
                //chunkFileNames: "chunk.js",
                //manualChunks: undefined,
            }
    }
  }
})
