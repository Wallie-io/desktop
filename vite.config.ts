import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@api': path.resolve(__dirname, './src/api'),
            '@type': path.resolve(__dirname, './src/type'),
        },
    },
})
