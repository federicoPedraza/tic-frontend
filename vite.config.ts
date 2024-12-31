import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/tic-frontend/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {},
      sass: {},
    },
  },
  server: {
    open: true,
  },
});
