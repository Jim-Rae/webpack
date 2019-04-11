# {{ name }}

> {{ description }}

## 特别说明

+ 如果是pc端，需注释 *node_modules > lib-flexible > flexible.js* 文件的L71 ~ L73


## 项目结构(src文件夹)

``` bash
src
|-- api                         # 接口请求api
|   |-- axios-config.js         # axios配置
|   |-- index.js                # api方法
|   |-- mock.js                 # 模拟数据
|-- assets                      # 静态文件
|   |-- img           
|   |-- svg
|-- components                  # 通用组件
|   |-- component-a.vue         # 组件a
|   |-- register-all.js         # 用于全局注册所有通用组件
|-- pages                       # 页面以及其页面组件和子页面
|   |-- page-a                  # 页面a
|   |   |-- children            # 子页面，用于路由嵌套
|   |   |   |-- children-a      
|   |   |   |   |-- children
|   |   |   |   |-- components
|   |   |   |   |-- index.vue
|   |   |-- components          # 页面里的组件
|   |   |-- index.vue           # 页面代码
|-- plugins                     # 插件
|   |-- message-box             # 弹框
|   |   |-- index.js            # js代码
|   |   |-- index.less          # 样式
|   |-- install-all.js          # 用于全局安装所有的插件
|   |-- styles.less             # 用于导入所有插件的样式
|-- router                      
|   |-- index.js
|-- store                       # vuex相关代码
|   |-- index.js                
|-- style                       
|   |-- common.less             # 通用样式
|   |-- index.less              # 导入当前文件夹里所有的样式
|   |-- mixin.less              # less混用样式
|-- utils                       # 工具类方法
|   |-- browser.js              # 浏览器兼容相关方法
|   |-- common.js               # 通用工具方法
|   |-- install-all.js          # 用于全局安装所有的方法
|-- app.vue
|-- main.js
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
