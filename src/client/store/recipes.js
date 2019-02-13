export const state = () => ({
  list: [
    {
      _id: '5c516563fa79eba5eee2d41d',
      image: 'https://api.adorable.io/avatars/285/abott@adorable.png',
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
      prepMethods: ['Stir on Big Rock'],
      drinkware: 'Rocks',
      served: 'On a Big Rock',
      garnishes: [
        'Lemon Peel',
      ],
      initialVol: null,
      initialAbv: null,
      dilution: null,
      finalVol: null,
      finalAbv: null,
      glassFilled: null,
    },
    {
      _id: '5c5166cb23bc3d828c9d868d',
      image: 'http://i.pravatar.cc/150?img=3',
      name: 'Paloma',
    },
    {
      _id: '5c5166d44d0699c6afcaf6b6',
      image: 'http://i.pravatar.cc/150?img=45',
      name: 'Tommy\'s Margarita',
    },
    {
      _id: '5c5166da8720b8cfc03661ef',
      image: 'http://i.pravatar.cc/150?img=34',
      name: 'Grasshopper',
    },
    {
      _id: '5c5166e22a88aa7d02fc118f',
      image: 'http://i.pravatar.cc/150?img=35',
      name: 'Americano',
    },
    {
      _id: '5c5166eac423676cf72ccd0e',
      image: 'http://i.pravatar.cc/150?img=8',
      name: 'Aperol Spritz',
    },
    {
      _id: '5c5166ef45fcaa1e2b876e9c',
      image: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      name: 'French 75',
    },
    {
      _id: '5c5166f74f99951c82b56dcc',
      image: 'http://i.pravatar.cc/150?img=5',
      name: 'Jack Rose',
    },
    {    
      _id: '5c516702f6ce564e6932f296',        
      image: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      name: 'Mojito',
    },
    {
      _id: '5c51670bcf2732a73c859eca',
      image: 'http://i.pravatar.cc/150?img=12',
      name: 'Negroni',
    },
    {
      _id: '5c5167139f44869af0397364',
      image: 'http://i.pravatar.cc/150?img=13',
      name: 'Sherry Cobbler',
    },
    {
      _id: '5c516719f331a8d7963fd503',
      image: 'http://i.pravatar.cc/150?img=50',
      name: 'Sazerac',
    },
    {
      _id: '5c51672170014941bbdcc439',
      image: 'http://i.pravatar.cc/150?img=46',
      name: 'Singapore Sling',
    },
    {
      _id: '5c51672acd96a4c5a276b859',
      image: 'http://i.pravatar.cc/150?img=64',
      name: 'Pisco Sour',
    },
    {
      _id: '5c51673abdf547c35462e61f',
      image: 'http://i.pravatar.cc/150?img=5',
      name: 'Paper Plane',
    },
  ],
  currentRecipe: {
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
  SET_NAME (state, data) {
    state.currentRecipe.name = data;
  },

  SET_PREP_METHODS (state, data) {
    state.currentRecipe.prepMethods = data;
  },

  SET_DRINKWARE (state, data) {
    state.currentRecipe.drinkware = data;
  },

  SET_SERVED (state, data) {
    state.currentRecipe.served = data;
  },
};

export const actions = {
  setName ({commit}, data) {
    commit('SET_NAME', data);
  },

  setPrepMethods ({commit}, data) {
    commit('SET_PREP_METHODS', data);
  },

  setDrinkware ({commit}, data) {
    commit('SET_DRINKWARE', data);
  },

  setServed ({commit}, data) {
    commit('SET_SERVED', data);
  },
};