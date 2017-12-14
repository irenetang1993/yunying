/**
 * 浏览器缓存
 * @param  {[type]} Vue    [description]
 * @param  {[type]} engine [description]
 * @return {[type]}        [description]
 */
export default (Vue, engine) => {
  // memory
  const memory = {
    get: (key) => {
      return window.store[key]
    },
    set: (key, value) => {
      window.store[key] = value
      return true
    },
    remove: (key) => {
      delete window.store[key]
      return true
    },
    keys: () => {
      return Object.keys(window.store)
    },
    clear: () => {
      window.store = {}
      return true
    }
  }

  // cookie
  const cookie = {
    get: (key) => {
      /* eslint-disable */
      return unescape(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
    },
    set: (key, value, expire) => {
      expire = expire ? new Date(Date.now() + expire * 1000).toGMTString() : 'Tue, 19 Jan 2038 03:14:07 GMT'
      document.cookie = escape(key) + '=' + escape(value) + '; expires=' + expire + '; path=/'
      return true
    },
    remove: (key) => {
      document.cookie = escape(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
      return true
    },
    keys: () => {
      let keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/)
      keys.map(key => escape(key))
      return keys
    },
    clear: () => {
      let keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/)
      keys.forEach(key => document.cookie = escape(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/')
      return true
    }
  }

  // localStorage
  const localStorage = {
    get: (key) => {
      let value = window.localStorage.getItem(key)
      try {
        return JSON.parse(value)
      } catch (e) {
        return value
      }
    },
    set: (key, value) => {
      if (typeof value === 'object') value = JSON.stringify(value)
      window.localStorage.setItem(key, value)
      return true
    },
    remove: (key) => {
      window.localStorage.removeItem(key)
      return true
    },
    keys: () => {
      return Object.keys(window.localStorage)
    },
    clear: () => {
      window.localStorage.clear()
      return true
    }
  }

  // sessionStorage
  const sessionStorage = {
    get: (key) => {
      let value = window.sessionStorage.getItem(key)
      try {
        return JSON.parse(value)
      } catch (e) {
        return value
      }
    },
    set: (key, value) => {
      if (typeof value === 'object') value = JSON.stringify(value)
      window.sessionStorage.setItem(key, value)
      return true
    },
    remove: (key) => {
      window.sessionStorage.removeItem(key)
      return true
    },
    keys: () => {
      return Object.keys(window.sessionStorage)
    },
    clear: () => {
      window.sessionStorage.clear()
      return true
    }
  }

  let storage = {}
  switch (engine) {
    case 'memory':
      storage = memory
      break
    case 'cookie':
      storage = cookie
      break
    case 'local':
      storage = localStorage
      break
    case 'session':
    default:
      storage = sessionStorage
      break
  }

  Vue.prototype.$memory = Vue.$memory = memory
  Vue.prototype.$cookie = Vue.$cookie = cookie
  Vue.prototype.$localStorage = Vue.$localStorage = localStorage
  Vue.prototype.$sessionStorage = Vue.$sessionStorage = sessionStorage
  Vue.prototype.$storage = Vue.$storage = storage
}
