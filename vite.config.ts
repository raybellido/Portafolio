import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portafolio/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  server: {
    watch: {
      // En Windows, chokidar falla con "EBUSY: resource busy or locked"
      usePolling: true,
      interval: 300,
    },
  },
})