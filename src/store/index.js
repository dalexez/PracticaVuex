import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: [],
    sabor: null,
    decoracion: null,
    pedido: {
      Nombre: '',
      Telefono: '',
      Correo: '',
      sabores: [],
      decoraciones: []
    }
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
