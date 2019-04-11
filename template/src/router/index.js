import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 动态import，实现路由懒加载
const Home = () => import('@/pages/home')
const Demo = () => import('@/pages/demo')
const Axios = () => import('@/pages/axios')
const MessageBox = () => import('@/pages/message-box')

// 全局路由导航
const beforeEach = ((to, from, next) => {
  
})

const afterEach = ((to,from,next) => {
  
})

// 滚动行为，实现切换路由是滚动到顶部
const scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

export default new Router({
  beforeEach,
  afterEach,
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/message-box',
      name: 'MessageBox',
      component: MessageBox
    }
  ]
})
