<template>
  <div class="main-box">
    <h2>新手引导</h2>
    <ul class="nav-list clearfix">
      <li class="nav-item fl" v-for="item,index in navs" :key="index">
        <div class="nav-title">{{item.title}}</div>
        <template v-for="subItem,subIndex in item.menus">
          <el-button type="primary" @click="routerLink(index, subIndex, subItem.id)">{{subItem.label}}</el-button>
        </template>
      </li>
    </ul>
    <!--弹框-->
    <main-dialog v-model="isShow"></main-dialog>
  </div>
</template>

<script>
import MainDialog from '@/components/dialog/MainDialog'

export default {
  name: 'main',
  data () {
    return {
      navs: [
        {
          title: '店铺设置',
          menus: [
            {label: '店铺信息', route: 'shop-info'},
            {label: '子账号设置', route: 'user-setting'},
            {label: '修改密码', route: 'set-password'}
          ]
        }, {
          title: '进货入库单',
          menus: [
            {label: '进货入库单', route: 'purchasWarehous', id: 0},
            {label: '单据中心', route: 'documents'}
          ]
        }, {
          title: '进货报表',
          menus: [
            {label: '商品进货统计', route: 'purchase-stats'},
            {label: '库存状况表', route: 'stock'},
            {label: '单据对账表', route: 'reconciliation'}
          ]
        }, {
          title: '销售出库',
          menus: [
            {label: '销售出库单', route: 'storageOrder', id: 0},
            {label: '单据中心', route: 'documents'}
          ]
        }, {
          title: '销售报表',
          menus: [
            {label: '商品销售统计', route: 'sale-list'},
            {label: '库存状况表', route: 'stock'},
            {label: '单据对账表', route: 'reconciliation'}
          ]
        }, {
          title: '财务处理',
          menus: [
            {label: '收款单', route: 'receipt'},
            {label: '付款单', route: 'payment'},
            {label: '费用单', route: 'cost'},
            {label: '单据结算表', route: 'settlement'}
          ]
        }, {
          title: '财务报表',
          menus: [
            {label: '经营报表', route: 'run-report'},
            {label: '经营日报', route: 'run-daily-report'}
          ]
        }
      ],
      isShow: false
    }
  },
  methods: {
    routerLink (index, subIndex, id) {
      let tab = this.navs[index]['menus'][subIndex]
      this.$parent.$parent.barChange(tab)
      id !== undefined ? this.$router.push({path: tab.route, query: {id}}) : this.$router.push(tab.route)
    }
  },
  components: {
    MainDialog
  }
}
</script>
