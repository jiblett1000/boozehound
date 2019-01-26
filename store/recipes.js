export const state = () => ({
  recipes: [
    {
      avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      title: 'Old Fashioned',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=3',
      title: 'Paloma',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=45',
      title: 'Tommy\'s Margarita',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=34',
      title: 'Grasshopper',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=35',
      title: 'Americano',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=8',
      title: 'Aperol Spritz',
    },
    {
      avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      title: 'French 75',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=5',
      title: 'Jack Rose',
    },
    {            
      avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      title: 'Mojito',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=12',
      title: 'Negroni',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=13',
      title: 'Sherry Cobbler',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=50',
      title: 'Sazerac',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=46',
      title: 'Singapore Sling',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=64',
      title: 'Pisco Sour',
    },
    {
      avatar: 'http://i.pravatar.cc/150?img=5',
      title: 'Paper Plane',
    },
  ],
  recipe: {
    name: 'Old Fashioned',
    ingredients: [
     {
        name: 'Rye Whiskey',
        abv: 40,
        amount: 2,
        unit: 'fl-oz',
      },
      {
        name: 'Simple Syrup (66°Bx)',
        abv: 0,
        amount: .25,
        unit: 'fl-oz',
      },
      {
        name: 'Angostura Bitters',
        abv: 40,
        amount: 2,
        unit: 'Dash',
      },
      {
        name: 'Orange Bitters',
        abv: 40,
        amount: 2,
        unit: 'Dash',
      },
    ],
    prepMethods: [],
    drinkware: null,
    served: '',
    garnishes: [
      'Lemon Peel',
    ],
    initialVol: null,
    initialAbv: null,
    dilution: null,
    finalVol: null,
    finalAbv: null,
    glassFilled: null,
  }
});

export const mutations = {
  setName (state, value) {
    state.recipe.name = value;
  },

  setPrepMethods (state, value) {
    state.recipe.prepMethods = value;
  },

  setDrinkware (state, value) {
    state.recipe.drinkware = value;
  },

  setServed (state, value) {
    state.recipe.served = value;
  },
};

export const actions = {
  setName ({commit}, value) {
    commit('setName', value);
  },

  setPrepMethods ({commit}, value) {
    commit('setPrepMethods', value);
  },

  setDrinkware ({commit}, value) {
    commit('setDrinkware', value);
  },

  setServed ({commit}, value) {
    commit('setServed', value);
  },
};