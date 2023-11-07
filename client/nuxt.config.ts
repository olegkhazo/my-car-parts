// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
const pkg = require('./package.json');

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: pkg.name,
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      "link": [],
      "style": [],
      "script": [],
      "noscript": [],
    },

  },

  css: [
    '@/assets/styles/_global.scss',
  ],
  modules: ["@nuxt/image", '@nuxtjs/style-resources']
})

