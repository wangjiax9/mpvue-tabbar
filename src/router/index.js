import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../pages/index/index.vue')
const Counter = () => import('../pages/counter/index.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    }
  ]
})
export default router
