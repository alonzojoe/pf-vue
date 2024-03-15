const state = {
  data: {
    theme: "lara-dark-purple",
    scrolledItems: [],
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
};

const actions = {};

const getters = {
  getCurrentTheme: (state) => state.data.theme,
  getScrolledItems: (state) => state.data.scrolledItems,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
