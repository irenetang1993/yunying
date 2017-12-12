export default [
  {
    // 带分组
    label: '常用',
    icon: 'el-icon-location',
    children: [
      {
        label: '单据',
        children: [
          {
            label: '单据中心',
            route: '/shop'
          }, {
            label: '单据草稿',
            route: '/common/draft'
          }, {
            label: '库存状况',
            route: '/stock/stock'
          }, {
            label: '导入记录',
            route: '/common/import-records'
          }
        ]
      }, {
        label: '单据',
        route: '/common/import-records'
      }
    ]
  }, {
    // 不带分组
    label: '常用',
    icon: 'el-icon-location',
    children: [
      {
        label: '单据中心',
        route: '/shop'
      }, {
        label: '单据草稿',
        route: '/common/draft'
      }, {
        label: '库存状况',
        route: '/stock/stock'
      }, {
        label: '导入记录',
        route: '/common/import-records'
      }
    ]
  }, {
    // 一级菜单
    label: '测试',
    icon: 'el-icon-menu',
    route: '/shop'
  }
]
