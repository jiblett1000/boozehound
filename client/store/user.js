export const state = () => ({
  firstName: "Christian",
  lastName: "Burkhart",
  email: "worm@christianburkhart.com",
  settings: {
    volumeDisplayUnits: "fl-oz",
    massDisplayUnits: "g",
    salesTaxRate: 9.15,
    decimalPlaceAccuracy: 2
  }
})

export const getters = {
  fullName: state => `${state.firstName} ${state.lastName}`
}

export const mutations = {}

export const actions = {}
