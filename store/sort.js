export const state = () => ({
  sortedBy: 'price'
})

export const getters = {
  sortedBy: state => state.sortedBy
}

export const actions = {
  setSort ({ commit }, sort) {
    commit('setSort', sort)
  }
}

export const mutations = {
  setSort (state, sort) {
    state.sortedBy = sort
  }
}
