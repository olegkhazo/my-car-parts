// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_WDTGC09yj0oPOYDgvFnWRC46QuJMzRpKJnCCndeJskW',
      posthogHost: 'https://eu.posthog.com'
    }
  },
  app: {
    head: {
      script: [
        {
          src: "<https://example.com/script.js>",
          type: "text/javascript",
          async: true,
        },
      ],
    },
  },
  css: [
    "@/assets/styles/main.scss",
  ],
  modules: [
    "@pinia/nuxt", 
    "@nuxtjs/style-resources", 
    "nuxt-gtag",
    "@nuxt/image", 
    "nuxt-simple-robots",  
    "nuxt-simple-sitemap"
  ],
  site: {
    url: 'https://mynextparts.com',
  },
  gtag: {
    id: "G-LRYNR27VT7"
  },
})

