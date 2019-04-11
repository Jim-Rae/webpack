import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 动态import，实现路由懒加载
const Home = () => import('@/pages/home')
const Axios = () => import('@/pages/axios')

{{#if_eq type "m"}}
const Demo = () => import('@/pages/demo')
const MessageBox = () => import('@/pages/message-box')
{{/if_eq}}

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
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {{#if_eq type "m"}}
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/message-box',
      name: 'MessageBox',
      component: MessageBox
    }
    {{/if_eq}}
  ]
})
