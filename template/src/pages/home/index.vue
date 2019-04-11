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

