/**
 * Tab面板-数据缓存
 */
export default {
  data () {
    let initTab = {label: '新手引导', route: 'main'}
    return {
      initTab,
      tab: this.$storage.get('tab') || initTab,
      tabs: this.$storage.get('tabs') || [initTab],
      curTab: {}
    }
  },
  watch: {
    tab (val) {
      this.$storage.set('tab', val)
    },
    tabs (val) {
      this.$storage.set('tabs', val)
    },
    curTab (val) {
      this.tab = val
      if (!hasTab(this.tab, this.tabs)) this.tabs.push(val)
    }
  }
}

// 判断tab是否存在
function hasTab (tab, tabs) {
  let [i, len] = [0, tabs.length]
  for (; i < len; i++) {
    let item = tabs[i]
    if (item['label'] === tab['label'] && item['route'] === tab['route']) {
      return true
    }
  }
  return false
}
