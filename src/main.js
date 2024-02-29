import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import Button from "primevue/button";
import AnimateOnScroll from "primevue/animateonscroll";
import Dialog from "primevue/dialog";
import Galleria from "primevue/galleria";
// import "primevue/resources/themes/lara-light-purple/theme.css";
import "primeflex/primeflex.css";
import "./assets/css/fontawesome.css";
import "./assets/css/style.css";
import "./assets/js/font-awesome.js";

import store from "./store";

const app = createApp(App);
app.directive("animateonscroll", AnimateOnScroll);
app.component("Carousel", Carousel);
app.component("Button", Button);
app.component("Tag", Tag);
app.component("Modal", Dialog);
app.component("Galleria", Galleria);
app.use(PrimeVue);
app.use(store);

app.mount("#app");
