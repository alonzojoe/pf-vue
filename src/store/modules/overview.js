const state = {
  data: {
    theme: "",
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
