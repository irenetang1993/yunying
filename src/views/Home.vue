<template>
  <div class="wrapper">
    <v-header @change="headChange" @show="showDialog" />
    <v-sidebar @change="barChange" />
    <div class="content-box">
      <transition name="move" mode="out-in">
        <router-view v-if="noTab" />
        <v-tabs :tabs="tabs" :route="route" @change="tabChange" v-else />
      </transition>
    </div>
    <feed-back v-model="isShow" />
  </div>
</template>

<script>
import VHeader from '@/components/layout/Header'
import VSidebar from '@/components/layout/Sidebar'
import VTabs from '@/components/layout/Tabs'
import FeedBack from '@/components/dialog/FeedBack'

let initRoute = {label: '新手引导', route: 'main'}
export default {
  name: 'home',
  data () {
    let noTab = !!this.$route.meta.noTab
    let route = this.$storage.get('route') || initRoute
    let tabs = this.$storage.get('tabs') || [route]
    return {
      noTab, // 是否显示tab栏
      route,
      tabs,
      isShow: false
    }
  },
  watch: {
    '$route' (to) {
      this.noTab = !!to.meta.noTab
    },
    route (val) {
      this.$storage.set('route', val)
    },
    tabs (val) {
      this.$storage.set('tabs', val)
    }
  },
  methods: {
    // 监听Header组件change事件
    headChange (tab) {
      this.route = tab
      if (!this.hasTab(tab)) this.tabs.push(tab)
    },
    showDialog () {
      this.isShow = true
    },
    // 监听sidebar组件change事件
    barChange (tab) {
      this.headChange(tab)
    },
    // 监听Tab组件change事件
    tabChange (type, val) {
      if (type === 'setTab') {
        this.route = this.tabs[val]
      } else if (type === 'rmTab') {
        this.tabs.splice(val, 1)
      } else if (type === 'rmOthers') {
        this.route = this.tabs.slice(val, val + 1)[0]
        this.tabs = val ? [initRoute, this.route] : [initRoute]
      } else if (type === 'rmAll') {
        this.route = initRoute
        this.tabs = [initRoute]
      }
    },
    // 判断tab是否存在
    hasTab (tab) {
      let [i, len] = [0, this.tabs.length]
      for (; i < len; i++) {
        let item = this.tabs[i]
        if (item['label'] === tab['label'] && item['route'] === tab['route']) {
          return true
        }
      }
      return false
    }
  },
  components: {
    VHeader,
    VSidebar,
    VTabs,
    FeedBack
  }
}
</script>
