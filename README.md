# 基于vue和webpack的前端项目模版

> 默认使用到的技术栈：vue, vue-router, vuex, axios, less, es6

## 项目文件结构(src文件夹)

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

## 用法

这是[vue-cli](https://github.com/vuejs/vue-cli)的一个项目模板。**建议使用npm 3+来获得更有效的依赖关系树。**

``` bash
$ npm install -g vue-cli
$ vue init Jim-Rae/webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

