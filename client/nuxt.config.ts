// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
 
  css: [
    "@/assets/styles/main.scss",
  ],
  modules: [
    "@pinia/nuxt", 
    "@nuxtjs/style-resources", 
    ["nuxt-gtag", {
      id: 'G-LRYNR27VT7'
    }],
    "@nuxt/image", 
    "nuxt-simple-robots",  
    "nuxt-simple-sitemap"
  ],
  site: {
    url: 'https://mynextparts.com',
  },
  
})

