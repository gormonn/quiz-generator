import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "prismjs",
            {
              languages: ["javascript", "css", "html"],
              plugins: ["line-numbers", "show-language"],
              theme: "okaidia",
              css: true,
            },
          ],
        ],
      },
    }),
    tsconfigPaths(),
  ],
});
