export const state = () => ({
  drawer: null,
});

export const mutations = {
  toggleDrawer (state, value) {
    state.drawer = value;
  },
};

export const actions = {
  toggleDrawer ({commit}, data) {
    commit('toggleDrawer', data)
  },
};