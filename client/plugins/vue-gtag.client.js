import VueGtag from 'vue-gtag-next'
import { GA_MEASUREMENT_ID } from '@/utils/constants'
 
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: GA_MEASUREMENT_ID
    }
  })
})