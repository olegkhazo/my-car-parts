// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({

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
  }
})

