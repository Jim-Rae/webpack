<template>
  <div id="demo">
    <TopNav title="demo"/>
    <ul>
      <li @click="$_toast.show('我是一个toast')">
        toast
        <img src="@/assets/img/icon_go.png" alt="icon_go.png">
      </li>
      <li @click="clickIndicator">
        indicator
        <img src="@/assets/img/icon_go.png" alt="icon_go.png">
      </li>
      <li @click="$_picker.show()">
        picker
        <img src="@/assets/img/icon_go.png" alt="icon_go.png">
      </li>
      <li @click="$_datepicker.show()">
        datepicker
        <img src="@/assets/img/icon_go.png" alt="icon_go.png">
      </li>
      <li @click="$_distpicker.show()">
        distpicker
        <img src="@/assets/img/icon_go.png" alt="icon_go.png">
      </li>
      <router-link
      tag="li"
      :to="{name: 'MessageBox'}">
        message-box
        <img src="@/assets/img/icon_go.png" alt="icon_go.png">
      </router-link>
      <router-link
      tag="li"
      :to="{name: 'Axios'}">
        axios
        <img src="@/assets/img/icon_go.png" alt="icon_go.png">
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  created () {
    console.log('您现在处于demo页...')
    // 初始化picker
    this.$_picker.init('请选择', ['选项一', '选项二', '选项三', '选项四', '选项五'], value => {
      this.$_toast.show(`你选择了${value}`)
      console.log('你选择了', value)
    })
    // 初始化datepicker
    this.$_datepicker.init('请选择日期', value => {
      this.$_toast.show(`你选择了${value.year}${value.month}${value.date}`)
      console.log(`你选择了${value.year}${value.month}${value.date}`)
    })
    // 初始化distpicker
    this.$_distpicker.init('请选择地区', value => {
      this.$_toast.show(`你选择了${value.province}${value.city}${value.district}`)
      console.log(`你选择了${value.province}${value.city}${value.district}`)
    })
  },
  methods: {
    clickIndicator () {
      this.$_indicator.show()
      setTimeout(() => {
        this.$_indicator.close()
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

#demo {
  padding-top: 84px;

  ul {

    li {
      position: relative;
      .sc(28px, @subTextColor);
      padding: 30px;
      border-bottom: 1px solid @borderColor; /* no */

      img {
        .yt;
        right: 20px;
        width: 60px;
      }
    }
  }
}
</style>

