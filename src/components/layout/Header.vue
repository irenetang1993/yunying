<template>
  <div class="header-box">
    <div class="header-logo">
      <img class="header-logo__img" :src="logoImg">
    </div>
    <div :class="item.className" v-for="item,index in subMenus" :key="index">
      <img class="user__img" :src="avatarImg">
      <!-- 下拉菜单 -->
      <el-dropdown @command="handleCommand" trigger="click">
        <el-button type="text" class="el-button--white">{{item.text}}<i class="el-icon-caret-bottom el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <template v-for="subItem,subIndex in item.dropdown">
            <el-dropdown-item :command="subItem.command" v-if="subItem.command">{{subItem.text}}</el-dropdown-item>
            <el-dropdown-item disabled v-else>{{subItem.text}}</el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    // this.$storage.set('username', '测试员')
    let userName = this.$storage.get('username')
    return {
      subMenus: [
        {
          className: 'header-user header-user--info',
          text: `Hi, ${userName}`,
          dropdown: [
            {text: '店铺信息', command: 'shop'},
            {text: '乐来配送设置', command: 'distribution'},
            {text: '司机设置', command: 'driver'},
            {text: '子账号设置', command: 'account'},
            {text: '退出登录', command: 'logout'}
          ]
        }, {
          className: 'header-user header-user--help',
          text: '帮助',
          dropdown: [
            {text: '新手引导', command: 'main'},
            {text: '帮助中心'},
            {text: '意见反馈', command: 'feedback'},
            {text: '客服1：4232323232'},
            {text: '客服1：400-888-9999'},
            {text: '服务时间：9:00-21:00'}
          ]
        }
      ],
      logoImg: require('@/assets/images/logo_img.png'),
      avatarImg: require('@/assets/images/avatar_icon.png')
    }
  },
  methods: {
    // 指令函数
    commandFn (label, route) {
      let tab = {
        label,
        route
      }
      this.$root.curTab = tab
      this.$router.push(route)
    },
    // 退出登录 指令
    logoutCommand () {
      ['username', 'access_token', 'refresh_token', 'Stocks', 'path'].forEach(key => {
        this.$cookie.remove(key)
      })
      window.location.href = this.$urls.loginUrl
    },
    handleCommand (command) {
      switch (command) {
        case 'shop':
          this.commandFn('店铺信息', 'shop')
          break
        case 'distribution':
          this.commandFn('配送区域', 'distribution')
          break
        case 'driver':
          this.commandFn('司机设置', 'driver')
          break
        case 'account':
          this.commandFn('子账号设置', 'account')
          break
        case 'logout':
          this.logoutCommand()
          break
        case 'main':
          this.$router.push('main')
          break
        case 'feedback':
          this.$emit('input', true)
          break
      }
    }
  }
}
</script>
