<template>
  <div class="wrapper">
    <v-header v-model="isShow" />
    <v-sidebar />
    <div class="content-box">
      <transition name="move" mode="out-in">
        <router-view v-if="noTab" />
        <v-tabs v-else />
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

export default {
  name: 'home',
  data () {
    let noTab = !!this.$route.meta.noTab
    return {
      noTab, // 是否显示tab栏
      isShow: false // 显示意见反馈弹窗
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
