<template>
  <div class="sidebar-box">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu class="el-menu-vertical-demo"
      :class="{ 'is-collapse': !isCollapse }"
      :collapse="true"
      :default-active="currentRoute">
      <template v-for="(menu, index) in menus">
        <el-submenu v-if="menu.children" :index="index.toString()" :key="index">
          <template slot="title">
            <i :class="menu.icon"></i>
            <i v-if="!isCollapse">{{ menu.label }}</i>
          </template>
          <template v-for="(subMenu, index) in menu.children">
            <el-submenu v-if="subMenu.children" :key="index">
              <span slot="title">{{ subMenu.label }}</span>
              <el-menu-item v-for="(item, index) in subMenu.children"
                @click="onClick(item)"
                :index="index.toString()"
                :key="index">{{ item.label }}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else @click="onClick(subMenu)" :index="index.toString()" :key="index">
              {{ subMenu.label }}
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else @click="onClick(menu)"
          :index="index.toString()"
          :key="index">
          <i :class="menu.icon"></i>
          <i v-if="!isCollapse">{{ menu.label }}</i>
          <span slot="title">{{ menu.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menus from '@/utils/menu'

export default {
  name: 'sidebar',
  data () {
    return {
      isCollapse: false,
      menus
    }
  },
  computed: {
    currentRoute () {
      return this.$router.path
    }
  },
  methods: {
    onClick (menu) {
      this.$emit('change', menu)
      this.$router.push(menu.route)
    }
  }
}
</script>

<style scoped>
.is-collapse {
  width: 120px;
}
</style>
