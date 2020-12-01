import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { requiresAuth: false },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.get_access_token) {
      next({
        name: 'Login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
