import comlink from 'vite-plugin-comlink'
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    comlink()
  ],
  worker: {
    plugins: [
      comlink()
    ]
  },
  build: {
    minify: false
  }
})