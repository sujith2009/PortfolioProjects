import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-router-dom"], // Replace 'module-name' with the actual module you want to externalize
    },
  },
});
