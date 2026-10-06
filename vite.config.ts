import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { createApiMiddleware } from './server/api.ts'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'muller-sqlite-api',
      configureServer(server) {
        server.middlewares.use(createApiMiddleware())
      },
      configurePreviewServer(server) {
        server.middlewares.use(createApiMiddleware())
      },
    },
  ],
})
