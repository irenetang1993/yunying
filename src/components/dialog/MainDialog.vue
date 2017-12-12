<template>
  <el-dialog
    :visible.sync="visible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    width="50%"
    class="select-spu-dialog">
    <div slot="title">
      <span class="el-dialog__title">商品报警</span>
      <div class="right">
        <el-button class="btn-icon-close" @click="close" size="small"></el-button>
      </div>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="库存不足商品" name="first">
        过滤：
        <el-select v-model="value1" placeholder="显示全部" @change="ChooseProduct">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-checkbox v-model="checked" @change="check">显示已下架</el-checkbox>
        <v-table :config="tbConfig" :data="LowStocks"></v-table>
        <div class="pagination">
          <el-pagination @size-change="changeSize" @current-change="changePage" :current-page="pagi.page" :page-sizes="[20, 30, 50, 100]" :page-size="pagi.page_size" layout="total, sizes, prev, pager, next, jumper" :total="pagi.total_count">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="临期商品" name="second">
        <el-checkbox v-model="checkedExpiring" @change="checkExpiring">显示已下架</el-checkbox>
        <v-table :config="expiringConfig" :data="expiring"></v-table>
        <div class="pagination">
          <el-pagination @size-change="changeSize" @current-change="changePage" :current-page="pagiExpiring.page" :page-sizes="[20, 30, 50, 100]" :page-size="pagiExpiring.page_size" layout="total, sizes, prev, pager, next, jumper" :total="pagiExpiring.total_count">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div slot="footer">
      <el-button type="primary" @click="confirm">确认选择</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'main-dialog',
  props: {
    value: Boolean
  },
  data () {
    return {
      visible: this.value,
      LowStocks: [],
      expiring: [],
      count: 0,
      activeName: 'first',
      checked: true,
      checkedExpiring: true,
      checkVal: 1,
      checkedExVal: 1,
      options: [{
        value: '0',
        label: '显示全部'
      }, {
        value: '1',
        label: '只看低于最小库存'
      }, {
        value: '2',
        label: '只看低于近七天销量'
      }],
      value1: '',
      tbConfig: {
        columns: [
          {
            label: '序号',
            type: 'index',
            width: '80'
          }, {
            label: '图片',
            type: 'img',
            prop: 'gallery'
          }, {
            label: '商品名称',
            prop: 'name'
          }, {
            label: 'SKU编号',
            prop: 'sku_lsin'
          }, {
            label: '库存数量',
            prop: 'qty'
          }, {
            label: '最小库存',
            prop: 'min_qty'
          }, {
            label: '近七天销量',
            prop: '7days_sales',
            width: '120'
          }, {
            label: '建议最小补货量',
            prop: 'min_buy',
            width: '140'
          }, {
            label: '提醒原因',
            prop: 'reason'
          }
        ]
      },
      pagi: {
        page: 1,
        page_size: 20,
        total_count: 0
      },
      expiringConfig: {
        columns: [
          {
            label: '序号',
            type: 'index',
            width: '80'
          }, {
            label: '图片',
            type: 'img',
            prop: 'gallery'
          }, {
            label: '商品名称',
            prop: 'name'
          }, {
            label: 'SKU编号',
            prop: 'sku_lsin'
          }, {
            label: '库存数量',
            prop: 'qty'
          }, {
            label: '生产日期',
            prop: 'production_date'
          }, {
            label: '保质期',
            prop: 'shelf_life',
            width: '120'
          }, {
            label: '报警天数',
            prop: 'expiry_days',
            width: '140'
          }, {
            label: '到期日期',
            prop: 'maturity_date'
          }
        ]
      },
      pagiExpiring: {
        page: 1,
        page_size: 20,
        total_count: 0
      }
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  },
  methods: {
    changeSize () {},
    changePage () {},
    ChooseProduct () {},
    purchasWarehous () {},
    storageOrder () {},
    check () {},
    checkExpiring () {},
    close () {
      this.$emit('input', false)
    },
    confirm () {
      this.$emit('input', false)
    }
  }
}
</script>
