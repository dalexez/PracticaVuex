import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: [],
    sabor: null,
    decoraciones: [],
    decoracion: null
  },
  getters: {
  },
  mutations: {
    addSabor(state) {
      state.sabores = [state.sabor, ...state.sabores]
    },
    asignarSabor(state, inSabor) {
      state.sabor = inSabor
    }
  },
  actions: {
    addSaborAction(){
      this.commit('addSabor')
    }
  },
  modules: {
  }
})
