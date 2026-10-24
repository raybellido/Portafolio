import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    watch: {
      // En Windows, chokidar falla con "EBUSY: resource busy or locked"
      // cuando un archivo está siendo escrito o lo tiene abierto otro
      // programa (por ejemplo, un SVG exportado desde un editor gráfico).
      // El sondeo por polling evita ese error.
      usePolling: true,
      interval: 300,
    },
  },
})
