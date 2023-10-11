import { defineConfig } from 'vite';

export default defineConfig({
    // ...other configurations

    build: {
        // Enable Gzip compression for production builds
        brotliSize: false, // Optional: Disable Brotli compression if you want
    },
});