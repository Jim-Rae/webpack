{{#if_eq type "m"}}
<template>
  <div id="home">
    <img class="logo" src="@/assets/img/logo.png" alt="logo.png">
    <p class="title">基于vue的移动端项目模版</p>
    <p class="author">designed by JimRae</p>
    <router-link
    :to="{name: 'Demo'}">
      <button>demo</button>
    </router-link>
    <p class="link"><a href="https://github.com/Jim-Rae/webpack">https://github.com/Jim-Rae/webpack</a></p>
    <footer class="copyright">
      Copyright © JimRae. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    console.log('您正处于首页...')
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

#home {
  text-align: center;
  padding-top: 200px;

  .logo {
    .wh(400px, 400px);
    margin-bottom: 30px;
  }

  .title {
    .sc(40px, @primaryTextColor);
    margin-bottom: 20px;
  }

  .author {
    .sc(32px, @minorTextColor);
  }

  button {
    margin: 60px auto 100px;
    .sc(36px, white);
    background-color: @themeColor;
    border-radius: 10px;
    padding: 14px 100px;
  }

  .link {
    font-size: 28px;
    text-decoration: underline;
  }

  .copyright {
    position: fixed;
    left: 0;
    bottom: 0;
    .wh(100%, auto);
    .sc(24px, @primaryTextColor);
    margin: auto;
    padding: 19px;
    line-height: 30px;
  }
}
</style>
{{/if_eq}}
{{#if_eq type "pc"}}
<template>
  <div id="home">
    <img class="logo" src="@/assets/img/logo.png" alt="logo.png">
    <p class="title">基于vue的PC端项目模版</p>
    <p class="author">designed by JimRae</p>
    <button @click="clickAlert">alert</button>
    <button @click="clickConfirm">confirm</button>
    <button @click="clickDialog">dialog</button>
    <button @click="$router.push({name: 'Axios'})">axios</button>
    <p class="link"><a href="https://github.com/Jim-Rae/webpack">https://github.com/Jim-Rae/webpack</a></p>
    <footer class="copyright">
      Copyright © JimRae. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    console.log('您正处于首页...')
  },
  methods: {
    clickAlert () {
      this.$_msgbox.alert('我是一个alert', '提示').then(() => {
        console.log('点击了好的')
      })
    },
    clickConfirm () {
      this.$_msgbox.confirm('确定点击？', '提示').then(data => {
        if (data.action === 'confirm') {
          console.log('点击了确认')
        } else {
          console.log('点击了取消')
        }
      })
    },
    clickDialog () {
      this.$_msgbox.dialog('请随便输入', '哈哈哈').then(data => {
        console.log(data.action)
        console.log(data.textarea)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

#home {
  position: relative;
  text-align: center;
  padding: 100px 0 100px;
  min-height: 100vh;

  .logo {
    .wh(300px, 300px);
    margin-bottom: 30px;
  }

  .title {
    .sc(40px, @primaryTextColor);
    margin-bottom: 20px;
  }

  .author {
    .sc(32px, @minorTextColor);
  }

  button {
    margin: 60px 20px 100px;
    .sc(30px, white);
    background-color: @themeColor;
    border-radius: 10px;
    padding: 14px 100px;
    cursor: pointer;
  }

  .link {
    font-size: 28px;
    text-decoration: underline;
  }

  .copyright {
    position: absolute;
    left: 0;
    bottom: 0;
    .wh(100%, auto);
    .sc(24px, @primaryTextColor);
    margin: auto;
    padding: 19px;
    line-height: 30px;
  }
}
</style>
{{/if_eq}}
