/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

export const aliases = {
  '@': path.resolve(__dirname, './src/'),
  '@components': path.resolve(__dirname, './src/components/')
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: aliases
  },
  plugins: [
    react(),
    eslintPlugin()
  ]
})
