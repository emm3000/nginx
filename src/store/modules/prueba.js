
export default {
  namespaced: true,

  state: {
      name: 'Pwwrueba',
      numero: 88,
      xxx: true || false
  },
  getters: {
      dd(state) {
          return state.numero + 1
      } 
  },
  mutations: {
      www(state, payload) {
          console.log(payload)
          state.numero += payload.numero
      }
  },
  actions: {
      wwwactions({commit}, payload) {
          console.log('commit desde actions')
          commit('www', payload)
      },
      contexto(context) {
          console.log(context)
      }
  }
}
