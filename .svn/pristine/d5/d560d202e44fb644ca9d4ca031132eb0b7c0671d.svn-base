<template>
  <router-view />
</template>

<script>
export default {
  name: 'app',
  watch: {
    '$route' (to) {
      if (window._hmt) {
        // 百度统计
        // window._hmt.push(['_trackPageview', '/#' + to.path])
      }
    }
  },
  mounted () {
    // 加载百度统计js库
    this.$$.loadJS('https://hm.baidu.com/hm.js?703a17a7530d6abbb65a56eec15e0f3d')
  }
}
</script>
