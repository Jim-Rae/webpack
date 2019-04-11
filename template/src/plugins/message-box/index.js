{{#if_eq type "m"}}
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
{{/if_eq}}
{{#if_eq type "pc"}}
/*
 * @Author: Jim
 * @Date: 2018-10-11
 * @Last Modified by: Jim
 * @Last Modified time: 2019-01-20
 * Desc: 信息框
 */

/*
 * 用法：
 * this.$_msgbox.alert(message, title).then(() => {
 *  ...
 * })
 * 
 * this.$_msgbox.confirm(message, title).then(data => {
 *    console.log(data.action)
 * })
 * data.action为'confirm'时，即点击了确认，为'cancel'时，即点击了取消
 * 
 * this.$_msgbox.dialog(title, placeholder).then(data => {
 *    console.log(data.action)
 *    console.log(data.textarea)
 * })
 * data.textarea为用户在对话框输入的内容
 */

const Msgbox = {
  template: `
    <div 
      v-show="visible" 
      class="msgbox-wrapper"
      >
      <transition 
        name="msgbox" 
        @after-leave="visible=false"
      >
        <div v-show="isShow" class="msgbox">
          <img 
            class="msgbox-close" 
            :src="closeUrl" alt="icon-cancel.png"
             @click="handleCancel"
          >
          <div 
            v-if="title" 
            class="msgbox-title"
          >
            \{{title}}
          </div>
          <div 
            v-if="message&&type!=='dialog'" 
            class="msgbox-message"
          >
            \{{message}}
          </div>
          <textarea 
            v-if="type==='dialog'"
            class="msgbox-textarea" 
            :placeholder="message" v-model="textarea"
          ></textarea>
          <button 
            v-if="type==='alert'" 
            class="msgbox-alert-btn" 
            @click="handleAlertConfirm"
          >确定</button>
          <div v-else class="msgbox-other-btn">
            <button class="msgbox-other-btn-confirm" @click="handleConfirm">确定</button>
            <button class="msgbox-other-btn-cancel" @click="handleCancel">取消</button>
          </div>
        </div>
      </transition>
    </div>
  `,
  data() {
    return {
      type: null,
      title: null,
      message: null,
      callback: new Function(),
      visible: false,
      isShow: false,
      textarea: null,
      closeUrl: require('@/assets/img/icon-cancel.png')
    }
  },
  methods: {
    handleAlertConfirm() {
      this.isShow = false
      this.callback()
    },
    handleCancel() {
      this.isShow = false
      this.callback({action: 'cancel'})
    },
    handleConfirm() {
      this.isShow = false
      this.type === 'dialog' ? this.callback({action: 'confirm', textarea: this.textarea}) : this.callback({action: 'confirm'})
    },

    alert(message, title) {
      this.type = 'alert'
      this.message = message
      this.title = title
      this.visible = true
      this.isShow = true
      return new Promise(resolve => {
        this.callback = resolve
      })
    },
    confirm(message, title) {
      this.type = 'confirm'
      this.message = message
      this.title = title
      this.visible = true
      this.isShow = true
      return new Promise(resolve => {
        this.callback = resolve
      })
    },
    dialog(title, placeholder) {
      this.type = 'dialog'
      this.message = placeholder
      this.title = title
      this.visible = true
      this.isShow = true
      this.textarea = null
      return new Promise(resolve => {
        this.callback = resolve
      })
    }
  }
}

export default {
  install(Vue) {
    const VueMsgbox = Vue.extend(Msgbox)

    const $vm = new VueMsgbox({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)

    const msgbox = {
      alert(message, title) {
        return $vm.alert(message, title)
      },
      confirm(message, title) {
        return $vm.confirm(message, title)
      },
      dialog(title, placeholder) {
        return $vm.dialog(title, placeholder)
      }
    }

    Vue.mixin({
      created() {
        this.$_msgbox = msgbox
      }
    })
  }
}
{{/if_eq}}

