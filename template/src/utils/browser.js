/*
 * @Author: Jim
 * @Date: 2018-10-05
 * @Last Modified by: Jim
 * @Last Modified time: 2018-10-05
 * @desc 浏览器兼容相关的通用方法
 */

const browser = {
  //获取浏览器transitionend事件
  whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
    }
    for(t in transitions){
        if( el.style[t] !== undefined ){
          return transitions[t];
        }
    }
  },

  //获取浏览器animationend事件
  whichAnimationEvent(){
    var t,
        el = document.createElement("fakeelement");

    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }
}

export default {
  install (Vue) {
    Vue.mixin({
      created () {
        this.$_browserUtils = browser
      }
    })
  }
}