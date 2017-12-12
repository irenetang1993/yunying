export default (Vue) => {
  Vue.prototype.$$ = {
    // 异步加载js库
    loadJS (link) {
      var script = document.createElement('script')
      script.src = link
      document.body.appendChild(script)
    }
  }
}
