/*
 * @Author: Jim
 * @Date: 2018-10-05
 * @Last Modified by: Jim
 * @Last Modified time: 2019-03-17
 * @desc 通用的工具类方法
 */

const common = {
  getQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null) return  unescape(r[2]);
     return null;
  },
  //验证手机号
  checkMobile (tel) {
    return tel.match(/^1[3|4|5|7|8]\d{9}$/)
  },
  // 验证邮箱
  checkEmail (email) {
    return email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]+)+)$/)
  },
  // 验证身份证号
  checkIdcardnumber (idcardnumber) {
    return idcardnumber.match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)
  },
  // 验证价格（最多两位小数）
  checkPrice (price) {
    return price.match(/(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/)
  },
  /* 对字符串部分隐藏
   * 入参: str(String): 需做处理的字符串
   *      hiddeneRate(Number): 隐藏比例, 0为不隐藏， 1为全部隐藏
   * 出参: (String): 处理后的字符串
   */
  hideCharAtString (str, hiddeneRate) {
    if (str.length === 1) { 
      return str + '*'
    } else if (str.length === 2) { 
      return str[0] + '*'
    } else if (str.length > 2) {
      var xinglen = Math.round(str.length * hiddeneRate),
          frontLen = Math.floor((str.length - xinglen) / 2),
          endLen = str.length - frontLen - xinglen,
          xing = ''
      for (var i = 0; i < xinglen; i++) {
        xing += '*'
      }
      return str.substring(0, frontLen) + xing + str.substring(str.length - endLen)
    } else {
      return ''
    }
  }, 
  //打乱数组
  shuffle (array) {
    var _array = array.concat()
    for (var i = _array.length; i--;) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = _array[i]
      _array[i] = _array[j]
      _array[j] = temp
    }
    return _array
  },
  /* 提取日期
   * 入参: dateNum(String), 格式可为20180825、0825、25
   * 出参: dateObj(Object), {year: '2018年', month: '8月', date: '25日'}
   */
  dateNum2dateObj (dateNum) {
    var year = null,
        month = null,
        date = null
    if (typeof(dateNum) === 'string') {
      switch (dateNum.length) {
        case 8: {
          year = dateNum.substr(0, 4) + '年'
          month = dateNum[4] === '0' ? dateNum[5] + '月' : dateNum.substr(4, 2) + '月'
          date = dateNum[6] === '0' ? dateNum[7] + '日' : dateNum.substr(6, 2) + '日'
        }break
        case 4: {
          month = dateNum[0] === '0' ? dateNum[1] + '月' : dateNum.substr(0, 2) + '月'
          date = dateNum[2] === '0' ? dateNum[3] + '日' : dateNum.substr(2, 2) + '日'
        }break
        case 2: {
          date = dateNum[0] === '0' ? dateNum[1] + '日' : dateNum + '日'
        }break
        default: ;
      }
    }
    return {
      year,
      month,
      date
    }
  },
  /* 计算倒计时
   * 入参: deadline(Number), 目标时间戳
   * 出参: curTime(Object), {hour: 1, minute: 29, second: 59}
   */
  countDownByDeadline (deadline) {
    let ms = deadline - new Date().getTime()
    if (ms <= 0) {
      return {hour: 0, minute: 0, second: 0}
    } else {
      let s = parseInt(ms / 1000),
          hour = parseInt(s / 3600),
          minute = parseInt(s % 3600 / 60),
          second = s % 60
      return {
        hour: hour < 10 ? `0${hour}` : `${hour}`,
        minute: minute < 10 ? `0${minute}` : `${minute}`,
        second: second < 10 ? `0${second}` : `${second}`
      }
    }
  }
}

export default {
  install (Vue) {
    Vue.mixin({
      created () {
        this.$_commonUtils = common
      }
    })
  }
}
