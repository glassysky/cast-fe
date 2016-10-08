<style lang="less">
@import "./index.less";
</style>

<template>
  <div class="navigator">
    <ul class="left_menu">
      <li>
        <a
          href="javascript:void(0)"
          class="band_name">CAST</a>
      </li>
    </ul>
    <ul class="right_menu">
      <li class="nav_item">
        <a v-link="{ path: '/' }">首页</a>
      </li>
      <li class="nav_item">
        <a v-link="{ path: '/news' }">新闻</a>
      </li>
      <li class="nav_item">
        <a v-link="{ path: '/activity' }">活动</a>
      </li>
      <li class="nav_item log_menu" v-if="!userName">
        <a
          v-link="{ path: '/sign-in' }"
          class="sign_link"
        >登陆</a>
        <span class="dot">·</span>
        <a
          v-link="{ path: '/sign-up' }"
          class="sign_link"
        >注册</a>
      </li>
      <li class="nav_item" v-if="userName">
        <div class="menu_wrap">
          <a
            class="user_name"
          >{{ userName }}</a>
          <ul
            class="personal_menu"
          >
            <li><a href="#">个人中心</a></li>
            <li><a href="#">注销</a></li>
          </ul>
        </div>
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
  ready() {

  },
  attached() {},
  methods: {

  },
  components: {},
  vuex: {
    getters: {
      userName: state => state.common.userName,
    },
    actions: {},
  },
};
</script>
