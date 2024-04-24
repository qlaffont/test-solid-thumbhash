import { defineConfig } from "@solidjs/start/config";
import { thumbHash } from 'vite-plugin-thumbhash';
export default defineConfig({
  vite: {
    plugins: [thumbHash()]
  }
});
