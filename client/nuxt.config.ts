// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "@/assets/styles/main.scss",
  ],
  modules: [
    "@pinia/nuxt", 
    "@nuxt/image", 
    "@nuxtjs/style-resources", 
    "nuxt-simple-robots",  
    "nuxt-simple-sitemap"
  ],
  image: {
    provider: 'ipx'
  }
})

