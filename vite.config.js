import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { markdown } from "./vite-plugin-markdown";

export default defineConfig({
  plugins: [
    markdown(),
    react({
      babel: {
        // plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
  ],
});
