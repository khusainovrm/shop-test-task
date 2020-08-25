export const state = () => ({
  modalWindowIsOpen: false,
  succesfulSend: false
})

export const getters = {
  modalWindowIsOpen: state => state.modalWindowIsOpen,
  succesfulSend: state => state.succesfulSend
}

export const actions = {
  openWindow ({ commit }) {
    commit('openWindow')
  },
  closeWindow ({ commit }) {
    commit('closeWindow')
  },
  succesfulSend ({ commit }) {
    commit('succesfulSend')
  },
  resetSuccesfulSend ({ commit }) {
    commit('resetSuccesfulSend')
  }
}

export const mutations = {
  openWindow (state) {
    state.modalWindowIsOpen = true
  },
  closeWindow (state) {
    state.modalWindowIsOpen = false
  },
  succesfulSend (state) {
    state.succesfulSend = true
  },
  resetSuccesfulSend (state) {
    state.succesfulSend = false
  }
}
