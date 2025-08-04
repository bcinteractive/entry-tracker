// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import path from 'path';
import path from 'node:path';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,        // allow LAN access
    port: 5173,        // optional
    allowedHosts: ['17bcfe5645aa.ngrok-free.app']
  },
});
