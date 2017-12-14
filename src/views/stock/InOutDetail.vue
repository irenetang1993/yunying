<template>
  <div>
    日期：<span>{{ date }}</span>
    姓名：<span>{{ name }}</span>
    省份：<span>{{ province }}</span>
    市区：<span>{{ city }}</span>
    地址：<span>{{ address }}</span>
    邮编：<span>{{ postCode }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      name: '',
      province: '',
      city: '',
      address: '',
      postCode: ''
    }
  }
}
</script>
