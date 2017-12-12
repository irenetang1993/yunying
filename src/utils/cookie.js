/**
 * cookie缓存
 * @param  {[type]} Vue    [description]
 * @param  {[type]} cookie [description]
 * @return {[type]}        [description]
 */
export default (Vue, cookie) => {
  Vue.prototype.$cookie = cookie
}
