export const state = () => ({
  products: []
})

export const getters = {
  products: state => state.products
}

export const actions = {
  setProducts ({ commit }, products) {
    commit('setProducts', products)
  }
}

export const mutations = {
  setProducts (state, products) {
    state.products = products
  }
}
