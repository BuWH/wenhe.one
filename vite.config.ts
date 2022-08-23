import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetTypography from '@unocss/preset-typography'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wenhe.one/",
  plugins: [
    react(),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        presetAttributify(),
        presetTypography({
          cssExtend: {
            'a': {
              'text-decoration': 'none',
            },
          },
        }),
      ],
    }),
  ]
})
