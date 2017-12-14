// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用第三方库
import ElementUI from 'element-ui'
import axios from 'axios'
import qs from 'qs'

// 引用全局组件
import Table from '@/components/common/Table'
import Form from '@/components/common/Form'

// 引用插件
import utils from '@/utils'
import ajax from '@/utils/ajax'
import storage from '@/utils/storage'
import api from '@/api'

// 引用混合
import tabMixin from '@/mixins/tab'

// 引用样式
import 'normalize.css'
import '@/assets/theme/index.css'
import '@/assets/css/main.less'
import '@/assets/css/style.less'

// 使用插件
/* eslint-disable */
[
  [ElementUI],
  [ajax, axios, qs],
  [storage],
  [utils],
  [api]
].forEach(args => Vue.use.apply(Vue, args))

// 使用全局组件
/* eslint-disable */
new Array(Table, Form).forEach(Comp => Vue.component(Comp.name, Comp))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mixins: [tabMixin],
  router,
  template: '<App/>',
  components: { App }
})
