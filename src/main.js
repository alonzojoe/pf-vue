import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import AnimateOnScroll from 'primevue/animateonscroll';
import { registerScrollSpy } from 'vue3-scroll-spy';
// import "primevue/resources/themes/lara-light-purple/theme.css";
import "primeflex/primeflex.css";
import "./assets/css/font-awesome.css";
import "./assets/css/style.css";

import store from "./store";

const app = createApp(App);
registerScrollSpy(app)
app.directive('animateonscroll', AnimateOnScroll);
app.use(PrimeVue);
app.use(store);

app.mount("#app");
