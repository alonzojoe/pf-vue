import { createStore } from "vuex";

import Overview from "./modules/overview";

const store = createStore({
  modules: {
    Overview,
  },
});

export default store;
