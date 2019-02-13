export const state = () => ({
  drawer: null,
});

export const mutations = {
  TOGGLE_DRAWER (state, data) {
    state.drawer = data;
  },
};

export const actions = {
  toggleDrawer ({commit}, data) {
    commit('TOGGLE_DRAWER', data)
  },
};