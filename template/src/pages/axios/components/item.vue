{{#if_eq type "m"}}
<template>
  <div class="item">
    <img :src="imgUrl">
    <p>\{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../style/mixin';

.item {
  width: 100%;
  margin-bottom: 40px;

  img {
    width: 100%;
  } 

  p {
    .sc(28px, @primaryTextColor);
  }
}
</style>
{{/if_eq}}


{{#if_eq type "pc"}}
<template>
  <div class="item">
    <img :src="imgUrl">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../style/mixin';

.item {
  width: 300px;
  margin-bottom: 40px;

  img {
    width: 100%;
  } 

  p {
    .sc(28px, @primaryTextColor);
  }
}
</style>
{{/if_eq}}


