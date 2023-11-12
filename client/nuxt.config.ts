// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import pkg from './package.json';

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "@/assets/styles/main.scss",
  ],
  modules: ["@pinia/nuxt", "@nuxt/image", "@nuxtjs/style-resources"]
})

