import { defineConfig } from 'vite'
import { corsProxyPlugin, corsProxyConfigurationOptions } from "./vite.cors-proxy";

export default defineConfig({
  base: './',
  build: {
    target: "es2022",
    lib: {
      entry: 'src/index.js',
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
  },
  esbuild: {
    target: "es2022",
    minifyIdentifiers: false,
    keepNames: true
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022"
    }
  },
  plugins: [corsProxyPlugin()],

  server: {
    proxy: {
      ...corsProxyConfigurationOptions
    },
  },
})


