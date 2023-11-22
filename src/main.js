import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import bootstrap from "bootstrap/dist/js/bootstrap.js";

import "@/styles/medias.css";
import Store from "./Store";

const app = createApp(App);

// Use individual plugins or features
app.use(router);
app.use(Store);
app.use(bootstrap);

app.mount("#app");
