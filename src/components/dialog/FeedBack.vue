<template>
  <el-dialog
    title="意见反馈"
    :visible.sync="visible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @close="close">
    <el-input type="textarea" v-model="textarea" :rows="10" resize="none"></el-input>
    <p>感谢您的反馈！</p>
    <template slot="footer">
      <el-button type="primary" @click="confirm">确认选择</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'feed-back',
  props: {
    value: Boolean
  },
  data () {
    return {
      visible: this.value,
      textarea: ''
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  },
  methods: {
    close () {
      this.textarea = ''
      this.$emit('input', false)
    },
    confirm () {
      this.close()
    }
  }
}
</script>
