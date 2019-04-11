import http from './axios-config'
import mockData from './mock'

// 是否开启模拟数据
const mockSwitch = true

const api = {

  getNews () {
    if (mockSwitch) {
      return Promise.resolve(mockData.news)
    } else {
      return http.get('/api/4/news/latest')
        .then(res => {
          return Promise.resolve(res)
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }
  }
}

export default {
  install (Vue) {
    Vue.mixin({
      created () {
        this.$_api = api
      }
    })
  }
}
