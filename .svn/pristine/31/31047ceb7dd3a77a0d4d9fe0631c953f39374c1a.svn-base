/**
 * ajax网络请求
 * @param  {[type]} Vue   [description]
 * @param  {[type]} axios [description]
 * @param  {[type]} qs    [description]
 * @return {[type]}       [description]
 */
export default (Vue, axios, qs) => {
  // ajax请求
  Vue.prototype.$ajax = function (options) {
    const type = options['type'] || 'post'
    let params = {
      method: type,
      url: options['url']
    }
    if (type === 'get') {
      // get方法传参
      Object.assign(params, {
        params: options['data'] || {}
      })
    } else {
      // post方法传参
      Object.assign(params, {
        data: qs.stringify(options['data'] || {})
      })
    }
    axios(params).then(res => {
      if (res.code === 200) {
        options['success'](res.data || {})
      } else {
        if (typeof options['error'] === 'function') options['error'](res.data || {})
      }
    }).catch(err => {
      console.error(`[network]: ${err}`)
    })
  }

  // get请求
  Vue.prototype.$get = function (url, data, success, error) {
    const params = {
      type: 'get',
      url,
      data,
      success,
      error
    }
    this.$ajax(params)
  }

  // post请求
  Vue.prototype.$post = function (url, data, success, error) {
    const params = {
      type: 'post',
      url,
      data,
      success,
      error
    }
    this.$ajax(params)
  }
}
