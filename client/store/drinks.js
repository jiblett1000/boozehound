import drinks from "../assets/drinks"
const list = drinks
export const state = () => ({
  list,

  currentDrink: {
    name: "Old Fashioned",
    ingredients: [
      {
        name: "Rye Whiskey",
        abv: 40,
        amount: 2,
        unit: "fl-oz"
      },
      {
        name: "Simple Syrup (66°Bx)",
        abv: 0,
        amount: 0.25,
        unit: "fl-oz"
      },
      {
        name: "Angostura Bitters",
        abv: 40,
        amount: 2,
        unit: "Dash"
      },
      {
        name: "Orange Bitters",
        abv: 40,
        amount: 2,
        unit: "Dash"
      }
    ],
    prepMethods: [],
    drinkware: null,
    served: "",
    garnishes: ["Lemon Peel"],
    initialVol: null,
    initialAbv: null,
    dilution: null,
    finalVol: null,
    finalAbv: null,
    glassFilled: null
  }
})

export const mutations = {
  SET_NAME(state, data) {
    state.currentRecipe.name = data
  },

  SET_PREP_METHODS(state, data) {
    state.currentRecipe.prepMethods = data
  },

  SET_DRINKWARE(state, data) {
    state.currentRecipe.drinkware = data
  },

  SET_SERVED(state, data) {
    state.currentRecipe.served = data
  }
}

export const actions = {
  setName({ commit }, data) {
    commit("SET_NAME", data)
  },

  setPrepMethods({ commit }, data) {
    commit("SET_PREP_METHODS", data)
  },

  setDrinkware({ commit }, data) {
    commit("SET_DRINKWARE", data)
  },

  setServed({ commit }, data) {
    commit("SET_SERVED", data)
  }
}
