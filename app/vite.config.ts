import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: "DS",
        name: "Design System",
        icons: [
          {
            src: "/ds/ds-192x192.svg",
            type: "image/svg+xml",
            sizes: "192x192",
          },
          {
            src: "/ds/ds-256x256.svg",
            type: "image/svg+xml",
            sizes: "256x256",
          },
          {
            src: "/ds/ds-384x384.svg",
            type: "image/svg+xml",
            sizes: "384x384",
          },
          {
            src: "/ds/ds-512x512.svg",
            type: "image/svg+xml",
            sizes: "512x512",
          },
        ],
        start_url: "/ds/",
        background_color: "#1b1b1b",
        display: "standalone",
        theme_color: "#1b1b1b",
        description: "Atomis Design System in React",
      },
    }),
  ],
  base: "/ds/",
});
