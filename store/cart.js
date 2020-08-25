export const state = () => ({
  quantityOfChosenGoods: []
})

export const getters = {
  quantityOfChosenGoods: state => state.quantityOfChosenGoods.length,
  productsInCart: state => state.quantityOfChosenGoods
}

export const actions = {
  initCart ({ commit }) {
    commit('initCart')
  },
  addToCart ({ commit }, product) {
    commit('addToCart', product)
  },
  resetCart ({ commit }) {
    commit('resetCart')
  },
  removeProductFromCart ({ commit }, additionalId) {
    commit('removeProductFromCart', additionalId)
  }
}

export const mutations = {
  initCart (state) {
    const products = JSON.parse(localStorage.getItem('products')) || []
    state.quantityOfChosenGoods = products
  },
  addToCart (state, product) {
    const good = { ...product, additionalId: Date.now() }
    const products = JSON.parse(localStorage.getItem('products')) || []
    products.push(good)
    localStorage.setItem('products', JSON.stringify(products))
    state.quantityOfChosenGoods.push(good)
  },
  resetCart (state) {
    state.quantityOfChosenGoods = []
  },
  removeProductFromCart (state, additionalId) {
    let products = JSON.parse(localStorage.getItem('products')) || []
    products = products.filter(product => product.additionalId !== additionalId)
    localStorage.setItem('products', JSON.stringify(products))
    state.quantityOfChosenGoods = state.quantityOfChosenGoods.filter(product => product.additionalId !== additionalId)
  }
}
