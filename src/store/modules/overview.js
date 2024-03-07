const state = {
  data: {
    theme: "lara-dark-purple",
  },
};

const mutations = {
  setTheme: (state, payload) => {
    state.data.theme = payload;
  },
};

const actions = {};

const getters = {
  getCurrentTheme: (state) => state.data.theme,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
