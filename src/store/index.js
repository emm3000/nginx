
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Prueba from './modules/prueba'
export default new Vuex.Store({
  state: {
    nombre: 'TiendaLocal',
    numero: 99
  },
  mutations: {
    otro(state) {
      state.numero ++
    }
  },
  actions: {
  },
  modules: {
    Prueba
  },
  getters: {
    dd(state) {
      return state.numero
  } 
  }
})
