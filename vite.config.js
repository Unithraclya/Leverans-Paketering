import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
   server: {
    proxy: {
      '/api' : {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false
      }
    }

  }
});