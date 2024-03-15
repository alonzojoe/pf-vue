const state = {
  data: {
    theme: "lara-dark-purple",
    scrolledItems: [],
    screenSize: "asdsad",
  },
};

const mutations = {
  setTheme: (state, payload) => {
    state.data.theme = payload;
  },

  addSection: (state, payload) => {
    if (!state.data.scrolledItems.includes(payload)) {
      state.data.scrolledItems.push(payload);
    }
  },

  setScreenSize: (state, payload) => {
    state.data.screenSize = payload;
  },
};

const actions = {};

const getters = {
  getCurrentTheme: (state) => state.data.theme,
  getScrolledItems: (state) => state.data.scrolledItems,
  getScreenSize: (state) => state.data.screenSize,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
