import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// For https://usuario.github.io/<repo>/, set VITE_BASE=/<repo>/.
export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, '.', '').VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
}));
