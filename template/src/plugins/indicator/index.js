/*
 * @Author: Jim
 * @Date: 2018-08-05
 * @Last Modified by: Jim
 * @Last Modified time: 2018-08-05
 * @Desc: loading指示器
 */

/*
 * 用法：直接使用this.$_indicator.show()显示指示器，使用this.$_indicator.close()关闭指示器
 */

const Indicator = {
  template: `
  <transition name="indicator-fade">
    <div class="indicator" v-show="visible">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
        <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
          <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  </transition>
  `,
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    close () {
      this.visible = false
    }
  }
}

export default {
  install (Vue) {
    const VueIndicator = Vue.extend(Indicator)
    const $vm = new VueIndicator({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)

    const indicator = {
      show () {
        $vm.show()
      },
      close () {
        $vm.close()
      }
    }

    Vue.mixin({
      created () {
        this.$_indicator = indicator
      }
    })
  }
}
