import Vue from 'vue'
import { URL } from '../index'

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
    fetchUserData ({rootGetters, commit}, payload) {
      return new Promise((resolve, reject) => {
        Vue.axios({
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + rootGetters['getAccessToken'] },
          url: URL.users + (payload ? payload : '')
        }).then(res => {
          commit('setLoggedUser', res.data.id)
          resolve(res.data)
        }).catch((error => {
          console.log(error);
          reject(error)
        }))
      })
    },
    fetchUserPermissions ({ getters, rootGetters }) {
      return new Promise((resolve, reject) => {
        console.log(URL.users + getters.getLoggedUser + '/permissions');
        Vue.axios({
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + rootGetters['getAccessToken'] },
          url: URL.users + getters.getLoggedUser + '/permissions'
        }).then(res => {
          resolve(res.data)
        }).catch((error => {
          console.log(error);
          reject(error)
        }))
      })
    }
  }
}
