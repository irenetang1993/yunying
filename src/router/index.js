import Vue from 'vue'
import Router from 'vue-router'

// 公共页面
const Home = () => import(/* webpackChunkName: "common" */ '@/views/Home.vue')
const Main = () => import(/* webpackChunkName: "common" */ '@/views/Main.vue')

// 单据页面
const Stock = () => import(/* webpackChunkName: "stock" */ '@/views/stock/Stock.vue')
const InOutDetail = () => import(/* webpackChunkName: "stock" */ '@/views/stock/InOutDetail.vue')

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
        {path: 'driver', name: 'Driver', component: Main},
        {path: 'stock', name: 'stock', component: Stock},
        {path: 'stock/inOutDetail/:id', name: 'in-out-detail', component: InOutDetail},
        {path: 'openingInventory', name: 'opening-inventory', component: Stock}
      ]
    }
  ]
})
