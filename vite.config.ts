import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/poc_lit_seo/',
  build: {
    target: 'es2017',
    brotliSize: false,
    outDir: 'docs',
    rollupOptions: {
      input: {
        google: 'google736bb0f85132064e.html',
        index: 'index.html',
        first: 'first.html',
        second: 'second.html',
        control: 'control.html',
      },
    }
  }
})
