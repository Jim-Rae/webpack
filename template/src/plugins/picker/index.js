/*
 * @Author: Jim
 * @Date: 2018-10-10
 * @Last Modified by: Jim
 * @Last Modified time: 2018-10-10
 * @Desc 再封装mint-ui里的picker + popup
 */

/*
 * 用法: 先使用this.$_picker.init(title, values, callback)初始化插件，再使用this.$_picker.show()即可显示插件
 * 方法说明：init(title, values, callback)
 * title (String): picker的标题
 * values (Array): picker可选的值
 * callback (Function): 点击确认后执行的回调函数，传出一个参数为选中值
 */

import { Picker, Popup } from 'mint-ui'

const MyPicker = {
  template: `
    <popup
      id="my-picker"
      v-model="visible"
      position="bottom"
    >
      <picker 
        :slots="slots" 
        :showToolbar="true"
        :visibleItemCount="5"
        :itemHeight="pickerHeight"
        @change="onValuesChange"
        @touchmove.native="$event.preventDefault()"
      >
        <button class="cancel-btn" @click="close">取消</button>
        <header class="picker-toolbar-title">\{{title}}</header>
        <button class="confirm-btn" @click="confirm">确认</button>
      </picker>
    </popup>
  `,
  name: 'MyPicker',
  components: {
    Picker,
    Popup
  },
  data () {
    return {
      visible: false,
      pickerHeight: parseInt(document.documentElement.style.fontSize) * 1.2,
      title: null,
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center'
        }
      ],
      callback: new Function(),
      selectValue: null
    }
  },
  methods: {
    onValuesChange (picker, values) {
      this.selectValue = values[0]
    },
    confirm () {
      this.visible = false
      this.callback(this.selectValue)
    },
    init (title, values, callback) {
      this.title = title
      this.slots[0].values = values
      this.callback = callback
    },
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
    const VuePicker = Vue.extend(MyPicker)
    const $vm = new VuePicker({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)

    const myPicker = {
      init (title, values, callback) {
        $vm.init(title, values, callback)
      },
      show () {
        $vm.show()
      },
      close () {
        $vm.close()
      }
    }

    Vue.mixin({
      created () {
        this.$_picker = myPicker
      }
    })
  }
}