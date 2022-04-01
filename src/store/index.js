import { createStore } from 'vuex'

export default createStore({
  state: {
    showSabores: true,
    showDecoraciones: true,
    show: '',
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
