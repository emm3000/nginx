import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponenteA from '#root/components/ComponenteA'
import ComponenteB from '#root/components/ComponenteB'
import ComponenteC from '#root/components/ComponenteC'
import App from '#root/components/Root'
import NotFound from '#root/components/NotFound'
Vue.use(VueRouter)

const routes = [
  {
    path: '/componenteA',
    name: "componenteA",
    component: ComponenteA
  },
  {
    path: '/componenteB',
    name: "componenteB",
    component: ComponenteB
  },
  {
    path: '/componenteC',
    name: "componenteC",
    component: ComponenteC
  },
  {
    path: '/',
    name: "root",
    component: App
  },
  {
    path: "*",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router