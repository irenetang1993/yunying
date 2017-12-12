/**
 * 浏览器缓存
 * @param  {[type]} Vue    [description]
 * @param  {[type]} cookie [description]
 * @param  {[type]} engine [description]
 * @return {[type]}        [description]
 */
export default (Vue, cookie, engine) => {
  switch (engine) {
    case 'memory':
      Vue.prototype.$storage = {
        get: (key, fallbackValue = null) => {
          return this.$localStorage.get(key, fallbackValue)
        },
        set: () => {
          console.log('memory')
        }
      }
      break
    case 'cookie':
      Vue.prototype.$storage = {
        get: (key, fallbackValue = null) => {
          return this.$localStorage.get(key, fallbackValue)
        },
        set: () => {
          console.log('cookie')
        }
      }
      break
    case 'ls':
      Vue.prototype.$storage = Vue.prototype.$localStorage
      break
    case 'ss':
    default:
      Vue.prototype.$storage = Vue.prototype.$session
      break
  }
}
