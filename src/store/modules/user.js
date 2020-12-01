
// import { URL } from '../index'

export default {
  namespaced: true,
  state: {
    loggedUser: null
  },

  getters: {
    getLoggedUser: (state) => state.loggedUser
  },

  mutations: {
    setLoggedUser: (state, payload) => state.loggedUser = payload
  },

  actions: {
    /*fetchUserPermissions ({ getters }) {
      return new Promise((resolve, reject) => {
        Vue.axios({
          method: 'GET',
          url: URL.users + getters.getLoggedUser
        })
      })
    }*/
  }
}
