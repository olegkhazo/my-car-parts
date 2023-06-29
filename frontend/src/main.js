import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { plugin, defaultConfig } from "@formkit/vue";
import { createHead } from "@vueuse/head";

import "./styles/main.scss";

createApp(App)
  .use(router)
  .use(createHead())
  .use(plugin, defaultConfig)
  .mount("#app");
