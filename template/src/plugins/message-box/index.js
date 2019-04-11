/* 
 * @Author: Jim
 * @Date: 2018-10-11
 * @Last Modified by: Jim
 * @Last Modified time: 2018-10-11
 * Desc: 信息框
 */

/*
 * 用法：
 * this.$_msgbox.alert(message, title).then(() => {
 *  ...
 * })
 * this.$_msgbox.confirm(message, title).then(action => {
 *  ...
 * })
 * action为'confirm'时，即点击了确认，为'cancel'时，即点击了取消
 */

const Msgbox = {
  template: `
    <div 
      v-show="visible" 
      class="msgbox-wrapper"
      @click="handleClickBg"
      @touchmove="$event.preventDefault()"
      >
      <transition name="msgbox" @after-leave="visible=false">
        <div v-show="isShow" class="msgbox" @click="$event.stopPropagation()">
          <div v-if="title" class="msgbox-title">\{{title}}</div>
          <div v-if="message" class="msgbox-message">\{{message}}</div>
          <button 
            v-if="type==='alert'" 
            class="msgbox-alert-btn" 
            @click="handleAlertConfirm"
            >确定</button>
          <div v-if="type==='confirm'" class="msgbox-confirm-btn">
            <button class="msgbox-confirm-btn-cancel" @click="handleCancel">取消</button><button class="msgbox-confirm-btn-confirm" @click="handleConfirm">确定</button>
          </div>
        </div>
      </transition>
    </div>
  `,
  data () {
    return {
      type: null,
      title: null,
      message: null,
      callback: new Function(),
      visible: false,
      isShow: false
    }
  },
  methods: {
    handleAlertConfirm () {
      this.isShow = false
      this.callback()
    },
    handleCancel () {
      this.isShow = false
      this.callback('cancel')
    },
    handleConfirm () {
      this.isShow = false
      this.callback('confirm')
    },
    handleClickBg () {
      if (this.type === 'alert') {
        this.handleAlertConfirm()
      } else {
        this.handleCancel()
      }
    },

    alert (message, title) {
      this.type = 'alert'
      this.message = message
      this.title = title
      this.visible = true
      this.isShow = true
      return new Promise(resolve => {
        this.callback = resolve
      })
    },
    confirm (message, title) {
      this.type = 'confirm'
      this.message = message
      this.title = title
      this.visible = true
      this.isShow = true
      return new Promise(resolve => {
        this.callback = resolve
      })
    }
  }
}

export default {
  install (Vue) {
    const VueMsgbox = Vue.extend(Msgbox)

    const $vm = new VueMsgbox({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)

    const msgbox = {
      alert (message, title) {
        return $vm.alert(message, title)
      },
      confirm (message, title) {
        return $vm.confirm(message, title)
      }
    }

    Vue.mixin({
      created () {
        this.$_msgbox = msgbox
      }
    })
  }
}