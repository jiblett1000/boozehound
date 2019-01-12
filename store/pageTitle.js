export const state = () => ({
  pageTitle: 'Home',
});

export const mutations = {
  set (state, data) {
    state.pageTitle = data
  },
};

export const actions = {
  set ({commit, rootState}, path) {
    const menu = rootState.mainMenu.mainMenu;

    for (let k in menu) {
      if (menu[k].href === path.toLowerCase()) {
        commit('set', menu[k].title);
        break;
      }
    }
  },
}