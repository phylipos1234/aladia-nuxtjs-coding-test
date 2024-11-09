// nuxt.config.js
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  // @ts-expect-error
  target: "static",
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
 
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Master Nuxt 3 - Full-Stack Complete Guide",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
    baseURL: process.env.NODE_ENV === "production" ? "/aladia-nuxtjs-coding-test" : "/",
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  nitro: {
    preset: 'static',
    output: {
      dir: 'dist'  // Ensure the output directory is set to 'dist'
    }
  }
});
