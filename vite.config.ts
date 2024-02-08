import { fileURLToPath, URL } from "node:url";
import ReactivityTransform from "@vue-macros/reactivity-transform/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
// https://newstu.github.io/mota/
export default defineConfig({
  plugins: [ReactivityTransform(), vue(), vueJsx()],
  base: "/mota/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    cssMinify: "esbuild",
    sourcemap: true,
  },
});
