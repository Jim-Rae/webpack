/*
 * @Author: Jim
 * @Date: 2018-08-23
 * @Last Modified by: Jim
 * @Last Modified time: 2018-08-23
 * @Desc toast提示窗
 */

/*
 * 用法：直接使用this.$_toast.show(msg)显示，msg为显示文字
 */

const Toast = {
  template: `
    <transition name="toast-fade">
      <div v-show="visible" class="toast">
        \{{message}}
      </div>
    </transition>
  `,
  name: 'Toast',
  data () {
    return {
      message: null,
      visible: false
    }
  },
  methods: {
    show (msg) {
      this.message = msg
      this.visible = true
      setTimeout(() => {
        this.visible = false
      },1500)
    }
  }
}

export default {
  install (Vue) {
    const VueToast = Vue.extend(Toast)
    const $vm = new VueToast({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)

    const toast = {
      show (msg) {
        $vm.show(msg)
      }
    }

    Vue.mixin({
      created () {
        this.$_toast = toast
      }
    })
  }
}
