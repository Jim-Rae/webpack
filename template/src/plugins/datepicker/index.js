/*
 * @Author: Jim
 * @Date: 2019-3-2
 * @Last Modified by: Jim
 * @Last Modified time: 2019-3-2
 * @Desc 时间选择器
 */

/*
 * 用法: 先使用this.$_datepicker.init(title, callback)初始化插件，再使用this.$_datepicker.show()即可显示插件
 * 方法说明：init(title, callback)
 * title (String): picker的标题
 * callback (Function): 点击确认后执行的回调函数，传出一个参数为选中值({year: '年', month: '月', date: '日'})
 */

import { Picker, Popup } from 'mint-ui'

const MyPicker = {
  template: `
    <popup
      id="my-datepicker"
      v-model="visible"
      position="bottom"
    >
      <picker 
        ref="datepicker"
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
      title: '请选择日期',
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          defaultIndex: 70,
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
      year: null,
      month: null,
      date: null
    }
  },
  computed: {
    datepicker () {
      return this.$refs.datepicker
    }
  },
  watch: {
    year (val) {
      let dates = []
      for (let i=1; i<=this.getMonthEndDay(parseInt(this.year.split('年')[0]), parseInt(this.month.split('月')[0])); i++) {
        dates.push(`${i}日`)
      }
      this.datepicker.setSlotValues(2, dates)
    },
    month (val) {
      let dates = []
      for (let i=1; i<=this.getMonthEndDay(parseInt(this.year.split('年')[0]), parseInt(this.month.split('月')[0])); i++) {
        dates.push(`${i}日`)
      }
      this.datepicker.setSlotValues(2, dates)
    }
  },
  created () {
    let years = []
    for (let i=-100; i<=0; i++) {
      years.push(`${new Date().getFullYear() + i}年`)
    }
    this.slots[0].values = years
    let months = []
    for (let i=1; i<=12; i++) {
      months.push(`${i}月`)
    }
    this.slots[2].values = months
  },
  methods: {
    isLeapYear(year) {
      return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
    },
    isShortMonth(month) {
      return [4, 6, 9, 11].indexOf(month) > -1;
    },
    getMonthEndDay(year, month) {
      if (this.isShortMonth(month)) {
        return 30;
      } else if (month === 2) {
        return this.isLeapYear(year) ? 29 : 28;
      } else {
        return 31;
      }
    },
    onValuesChange (picker, values) {
      this.year = values[0]
      this.month = values[1]
      this.date = values[2]
    },
    confirm () {
      this.visible = false
      this.callback({
        year: this.year,
        month: this.month,
        date: this.date
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
        this.$_datepicker = myPicker
      }
    })
  }
}