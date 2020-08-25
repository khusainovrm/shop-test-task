export const state = () => ({
  selectedCategory: 1
})

export const getters = {
  selectedCategory: state => state.selectedCategory
}

export const actions = {
  selectedCategory ({ commit }, category) {
    commit('selectedCategory', category)
  }
}

export const mutations = {
  selectedCategory (state, category) {
    state.selectedCategory = category
  }
}
