// noinspection ES6UnusedImports
import store from '../store/index'
// import axios from 'axios'
// import router from '../router/index'
// import _ from 'lodash'

// let loader = null

// How to use interceptors -> https://github.com/axios/axios#interceptors
// Do something before request is sent
export function onFulfilledRequest (config) {
  console.log(config.url);
  // Do something with request data
  return config
}

// Do something with request error
export function onRejectedRequest (error) {
  // Do something with request error
  console.log(config.url);
  return Promise.reject(error)
}

// Do something with response data
export function onFulfilledResponse (response) {
  // Do something with response data
  return Promise.resolve(response)
}

// Do something with response error
export async function onRejectedResponse (error) {
  // Do something with response error
  return Promise.reject(error)
}
