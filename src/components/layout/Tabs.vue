<template>
  <div class="tabs-box clearfix">
    <el-button type="text" class="fl" @click="change('rmAll')">全部关闭</el-button>
    <el-dropdown class="fr" @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <!-- 下拉菜单 -->
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="item.command" v-for="item,index in tabBtns" :key="index">{{item.text}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-tabs type="card" v-model="curTab" @tab-remove="closeTab" @tab-click="clickTab">
      <el-tab-pane
        :label="item.label"
        :name="item.route"
        v-for="item,index in $root.tabs"
        :key="index"
        :closable="index !== 0">
      </el-tab-pane>
    </el-tabs>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'v-tabs',
  data () {
    let curTab = this.$root.tab.route
    return {
      tabBtns: [
        {text: '关闭当前', command: 'current'},
        {text: '关闭其他', command: 'others'},
        {text: '关闭所有', command: 'all'}
      ],
      curTab
    }
  },
  watch: {
    '$root.tab' (val) {
      this.curTab = val.route
    }
  },
  methods: {
    // 切换tab
    clickTab (tab) {
      this.change('setTab', tab.index)
      this.$router.push(tab.name)
    },
    // 关闭当前tab
    closeTab (route = this.$root.tab.route) {
      let index = this.findTab(route)
      if (index !== 0) {
        let len = this.$root.tabs.length
        let next = index + 1 < len ? index + 1 : index - 1
        this.change('setTab', next)
        this.change('rmTab', index)
        this.$nextTick(() => {
          this.$router.push(this.$root.tab.route)
        })
      }
    },
    // tab 指令
    handleCommand (command) {
      switch (command) {
        case 'current':
          this.closeTab()
          break
        case 'others': // 关闭其他tab
          this.change('rmOthers')
          break
        case 'all': // 关闭所有tab
          this.change('rmAll')
          break
      }
    },
    // change事件
    change (type, val) {
      if (type === 'setTab') {
        this.$root.tab = this.$root.tabs[val]
      } else if (type === 'rmTab') {
        this.$root.tabs.splice(val, 1)
      } else if (type === 'rmOthers') {
        let index = this.findTab(this.$root.tab.route)
        this.$root.tab = this.$root.tabs.slice(index, index + 1)[0]
        this.$root.tabs = index ? [this.$root.initTab, this.$root.tab] : [this.$root.initTab]
        this.$nextTick(() => {
          this.$router.push(this.$root.tab.route)
        })
      } else if (type === 'rmAll') {
        let initTab = this.$root.initTab
        this.$root.tab = initTab
        this.$root.tabs = [initTab]
        this.$router.push('main')
      }
    },
    findTab (route) {
      let tabs = this.$root.tabs
      let [index, i, len] = [-1, 0, tabs.length]
      for (; i < len; i++) {
        if (tabs[i].route === route) {
          index = i
          break
        }
      }
      return index
    }
  }
}
</script>
