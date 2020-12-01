import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import Cookies from "../services/Cookie";

Vue.use(Vuex)

export const URL = {
  login: 'metalics/api/login/',
  users: 'metalics/api/users/'
}

export default new Vuex.Store({

  strict: !Vue.config.productionTip,

  state: {
    drawer: null,
    accessToken: Cookies.getCookie('accessToken'),
    refreshToken: null,
  },

  getters: {
    getDrawerState: (state) => state.drawer,
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken
  },

  mutations: {
    setDrawerState: (state, payload) => state.drawer = payload,
    setAccessToken: (state, payload) => {
      Cookies.setCookie('accessToken', payload, 30)
      state.accessToken = payload
    },
    setRefreshToken: (state, payload) => state.refreshToken = payload
  },

  actions: {
    toggleDrawerState: (store) => store.commit('setDrawerState', !store.getters.getDrawerState),
    refreshSession: ({commit, getters, dispatch},payload = null) => {
      return new Promise((resolve, reject) => {
        if (!getters.accessToken) {
          Vue.axios({
            method: 'POST',
            data: payload,
            url: URL.login + 'token'
          }).then(res => {
            commit('setAccessToken', res.data.accessToken)
            commit('setRefreshToken', res.data.refreshToken)
            resolve(res.data)
          }).catch( error => {
            reject(error)
            console.log(error);
          })
        }
      })
    },
    deleteSession: (store) => {
      store.commit('setAccessToken', null)
      Cookies.deleteCookie('accessToken')
    }
  },

  modules: {
    user
  }
})
