export const state = () => ({
  drawer: null,
  fullName: 'Christian Burkhart',
  contextMenu: [],
});

export const mutations = {     
  toggleDrawer (state, value) {
    state.drawer = value;
  } ,

  setContextMenu (state, data) {
    state.contextMenu = data;
  },
};

export const actions = {
  toggleDrawer ({commit}, data) {
    commit('toggleDrawer', data)
  }
};