/*
 * @Author: Jim
 * @Date: 2019-2-28
 * @Last Modified by: Jim
 * @Last Modified time: 2019-2-28
 * @Desc 三级联动地区选择器
 */

/*
 * 用法: 先使用this.$_distpicker.init(title, callback)初始化插件，再使用this.$_distpicker.show()即可显示插件
 * 方法说明：init(title, callback)
 * title (String): picker的标题
 * callback (Function): 点击确认后执行的回调函数，传出一个参数为选中值({province: '省', city: '市', district: '区'})
 */

import { Picker, Popup } from 'mint-ui'
import DISTRICTS from './districts';

const DEFAULT_CODE = 100000;

const MyPicker = {
  template: `
    <popup
      id="my-distpicker"
      v-model="visible"
      position="bottom"
    >
      <picker 
        ref="distpicker"
        :slots="slots" 
        :showToolbar=true
        :visibleItemCount=5
        :itemHeight="pickerHeight"
        @change="onValuesChange"
        @touchmove.native="$event.preventDefault()"
      >
        <button class="cancel-btn" @click="close">取消</button>
        <header class="picker-toolbar-title">{{title}}</header>
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
      title: '请选择地区',
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center'
        }, 
        {
          divider: true,
          content: '—',
          className: 'slot2'
        }, 
        {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        }, 
        {
          divider: true,
          content: '—',
          className: 'slot4'
        }, 
        {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'center'
        }
      ],
      callback: new Function(),
      province: null,
      city: null,
      district: null
    }
  },
  computed: {
    distpicker () {
      return this.$refs.distpicker
    }
  },
  watch: {
    province (val) {
      let citys = this.getDistricts(this.getAreaCode(val))
      this.distpicker.setSlotValues(1, Object.keys(citys).map(key => citys[key]))
    },
    city (val) {
      let districts = this.getDistricts(this.getAreaCode(val))
      this.distpicker.setSlotValues(2, Object.keys(districts).map(key => districts[key]))
    }
  },
  created () {
    let provinces = this.getDistricts()
    this.slots[0].values = Object.keys(provinces).map(key => provinces[key])
  },
  methods: {
    getDistricts(code = DEFAULT_CODE) {
      return DISTRICTS[code] || []
    },
    getAreaCode(name) {
      for(let x in DISTRICTS) {
        for(let y in DISTRICTS[x]) {
          if(name === DISTRICTS[x][y]) {
            return y
          }
        }
      }
    },
    onValuesChange (picker, values) {
      this.province = values[0]
      this.city = values[1]
      this.district = values[2]
    },
    confirm () {
      this.visible = false
      this.callback({
        province: this.province,
        city: this.city,
        district: this.district
      })
    },
    init (title, callback) {
      this.title = title
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
        this.$_distpicker = myPicker
      }
    })
  }
}