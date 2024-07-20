import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [imagetools()],
  css: {
    postcss: {
      map: true,
    },
  },
})
