import { createStore } from 'vuex'

export default createStore({
  state: {
    Nombre: '',
    Telefono: '',
    Correo: '',
    sabores: [],
    decoraciones: [],
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
    addSabores(state) {
      state.pedido.sabores = state.sabores
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
