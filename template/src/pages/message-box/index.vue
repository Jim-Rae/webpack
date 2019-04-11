<template>
  <div id="message-box">
    <TopNav title="message-box"/>
    <button @click="clickAlert">alert</button>
    <button @click="clickConfirm">confirm</button>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  created () {
    console.log('您正处于message-box页...')
  },
  methods: {
    clickAlert () {
      this.$_msgbox.alert('这是一个alert', '提示').then(() => {
        console.log('点击了好的')
        this.$_toast.show('点击了好的')
      })
    },
    clickConfirm () {
      this.$_msgbox.confirm('确定点击吗？', '提示').then(action => {
        if (action === 'confirm') {
          console.log('点击了确定')
          this.$_toast.show('点击了确定')
        } else {
          console.log('点击了取消')
          this.$_toast.show('点击了取消')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

#message-box {
  padding-top: 84px;
  text-align: center;

  button {
    display: block;
    .sc(32px, white);
    background-color: @themeColor;
    .wh(80%, 80px);
    line-height: 80px;
    margin: 40px auto;
    border-radius: 10px;
  }
}
</style>

