import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from 'tailwindcss';
export default defineConfig({
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // Change the port number to your desired value
  },
})
