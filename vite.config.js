import { defineConfig } from 'vite';
import { createServer } from 'https';
import { readFileSync } from 'fs';
export default defineConfig({
    server: {
        https: {
            key: readFileSync('key.pem'),
            cert: readFileSync('cert.pem'),
        },
    },
})