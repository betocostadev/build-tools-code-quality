import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { markdownToHtml } from './src/tools/markdown-custom-plugin'

export default defineConfig({
  plugins: [imagetools(), markdownToHtml()],
  css: {
    postcss: {
      map: true,
    },
  },
})
