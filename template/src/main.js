// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './style/index.less'
import Vue from 'vue'
import App from './app'
import router from './router'
import 'lib-flexible/flexible'  // 自动生成html的font-size，与px2rem配合使用
import store from './store'
import api from './api'
import registerAllComponents from './components/register-all'
import installAllPlugins from './plugins/install-all'
import installAllUtils from './utils/install-all'

{{#if_eq type "m"}}
import 'mint-ui/lib/style.css'
{{/if_eq}}

{{#if_eq type "m"}}
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
let vConsole = new VConsole() // 初始化
{{/if_eq}}

Vue.config.productionTip = false

Vue.use(api)
registerAllComponents(Vue)
installAllPlugins(Vue)
installAllUtils(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
