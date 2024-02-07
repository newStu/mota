import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import "./scss/index.scss";
import data from "../data/data.json";

if (!localStorage.getItem("local")) {
  localStorage.setItem("local", JSON.stringify(data));
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
