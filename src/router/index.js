import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import svgDataAttributes from '../views/svgDataAttributes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/svg',
    name: 'svgDataAttributes',
    component: svgDataAttributes
  }
]

const router = new VueRouter({
  routes
})

export default router
