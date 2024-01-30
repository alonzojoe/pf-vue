import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import Button from "primevue/button";
import AnimateOnScroll from "primevue/animateonscroll";
// import "primevue/resources/themes/lara-light-purple/theme.css";
import "primeflex/primeflex.css";
import "./assets/css/font-awesome.css";
import "./assets/css/style.css";

import store from "./store";

const app = createApp(App);
app.directive("animateonscroll", AnimateOnScroll);
app.component("Carousel", Carousel);
app.component("Button", Button);
app.component("Tag", Tag);
app.use(PrimeVue);
app.use(store);

app.mount("#app");
