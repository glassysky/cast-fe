<style lang="less">
@import "./index.less";
</style>

<template>
  <div class="navigator">
    <ul class="left_menu">
      <li><a href="javascript:void(0)">CAST</a></li>
      <li class="nav_item">
        <a v-link="{ path: '/' }">首页</a>
      </li>
      <li class="nav_item">
        <a v-link="{ path: '/news' }">新闻</a>
      </li>
      <li class="nav_item">
        <a v-link="{ path: '/activity' }">活动</a>
      </li>
    </ul>
    <ul class="right_menu">
      <li class="nav_item">
        <a v-link="{ path: '/sign-in' }">登陆</a>
      </li>
      <li class="nav_item">
        <a v-link="{ path: '/sign-up' }">注册</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {},
};
</script>
