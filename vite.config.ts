import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
      ],
    }),
  ]
})
