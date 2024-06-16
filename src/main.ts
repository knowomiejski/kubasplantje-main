import dotenv from "dotenv"
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import i18n from "./i18n";

dotenv.config()


const app = createApp(App);

app.use(i18n);

app.use(createPinia());
app.use(router);

app.mount("#app");
