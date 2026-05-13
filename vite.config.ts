import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig(async ({ command }) => {
  const isVercel = process.env.VERCEL === "1";

  const plugins: PluginOption[] = [
    tanstackStart({
      customViteReactPlugin: true,
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ];

  if (isVercel) {
    const { nitro } = await import("nitro/vite");
    plugins.splice(1, 0, nitro());
  }

  if (command === "build" && !isVercel) {
    plugins.push(cloudflare());
  }

  return {
    optimizeDeps: {
      exclude: ["@tanstack/start-server-core", "@tanstack/react-start/server-entry"],
      esbuildOptions: {
        external: [
          "#tanstack-router-entry",
          "#tanstack-start-entry",
          "#tanstack-start-plugin-adapters",
          "tanstack-start-manifest:v",
          "tanstack-start-injected-head-scripts:v",
        ],
      },
    },
    plugins,
  };
});
