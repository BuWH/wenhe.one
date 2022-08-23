
let __unconfig_data;
let __unconfig_stub = function (data) { __unconfig_data = data };
__unconfig_stub.default = (data) => { __unconfig_data = data };
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const Unocss = __unconfig_stub;
import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
  base: "/wenhe.one/",
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

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;