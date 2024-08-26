import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsChecker from 'vite-plugin-checker'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths(), tsChecker({ typescript: true })],
})
