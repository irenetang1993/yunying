import Vue from 'vue'
import Router from 'vue-router'

// 公共页面
const Home = () => import(/* webpackChunkName: "common" */ '@/views/Home.vue')
const Main = () => import(/* webpackChunkName: "common" */ '@/views/Main.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: 'main',
      children: [
        {path: 'main', name: 'Main', component: Main},
        {path: 'shop', name: 'Shop', component: Main},
        {path: 'distribution', name: 'Distribution', component: Main},
        {path: 'driver', name: 'Driver', component: Main}
      ]
    }
  ]
})
