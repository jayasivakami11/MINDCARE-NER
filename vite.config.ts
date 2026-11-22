// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  vite: {
    plugins: [
      VitePWA({
        strategies: "generateSW",
        registerType: "autoUpdate",
        injectRegister: null,
        filename: "sw.js",
        includeAssets: ["mindcare-icon.png", "mindcare-icon.svg", "favicon.ico"],
        manifest: {
          name: "MindCare NER",
          short_name: "MindCare",
          description: "A gentle, private memory and daily care companion.",
          theme_color: "#17324F",
          background_color: "#FAF7F0",
          display: "standalone",
          start_url: "/",
          scope: "/",
          icons: [
            {
              src: "/mindcare-icon.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
        devOptions: { enabled: false },
        workbox: {
          cleanupOutdatedCaches: true,
          navigateFallbackDenylist: [/^\/~oauth(?:\/|$)/],
          runtimeCaching: [
            {
              urlPattern: ({ request, url }) =>
                request.mode === "navigate" && !url.pathname.startsWith("/~oauth"),
              handler: "NetworkFirst",
              options: {
                cacheName: "mindcare-pages",
                networkTimeoutSeconds: 3,
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              urlPattern: ({ request, url }) =>
                request.destination === "image" && url.origin === self.location.origin,
              handler: "CacheFirst",
              options: {
                cacheName: "mindcare-images",
                expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              urlPattern: ({ request, url }) =>
                request.destination === "script" && url.origin === self.location.origin,
              handler: "CacheFirst",
              options: {
                cacheName: "mindcare-scripts",
                expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 },
              },
            },
            {
              urlPattern: ({ request, url }) =>
                request.destination === "style" && url.origin === self.location.origin,
              handler: "CacheFirst",
              options: {
                cacheName: "mindcare-styles",
                expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 30 },
              },
            },
          ],
        },
      }),
    ],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
