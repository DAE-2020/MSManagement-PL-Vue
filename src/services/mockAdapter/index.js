import Vue from 'vue'
import { loadMockDataSingle as login } from "./login";
import { loadMockDataSingle as users } from "./users";

function loadMockData (mock) {
  login(mock, 'metalics/api/login/')
  users(mock, 'metalics/api/users')
}


var MockAdapter = require("axios-mock-adapter");
export function startMocking () {
  // This sets the mock adapter on the default instance
  let mock = new MockAdapter(Vue.axios, {
    delayResponse: process.env.NODE_ENV === 'development' ? 1000 : 0
  })
  loadMockData(mock)
  mock.onAny().passThrough()
  return mock
}
