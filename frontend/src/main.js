import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "@/router";
import { createHead } from "@vueuse/head";

const pinia = createPinia()
import "./styles/main.scss";

createApp(App).use(router).use(createHead()).use(pinia).mount("#app");
