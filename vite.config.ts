import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // ↓追記
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
