import react from '@vitejs/plugin-react'
import Markdown from "@pity/vite-plugin-react-markdown";
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Markdown(),
    react(),
    tailwindcss(),
  ],
})
