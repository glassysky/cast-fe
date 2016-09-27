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
      <li class="nav_item">
        <a
          v-link="{ path: '/sign-in' }"
          class="sign_link"
        >
          登陆
        </a>
        <span class="dot">·</span>
        <a
          v-link="{ path: '/sign-up' }"
          class="sign_link"
        >
          注册
        </a>
      </li>
      <li class="nav_item">
        <div class="menu_wrap">
          <div
            class="user_name"
            @mouseover="showMenu"
            @mouseout="hideMenu"
          >glassysky</div>
          <ul
            class="personal_menu"
            v-if="show"
            transition="expand"
            @mouseover="showMenu"
            @mouseout="hideMenu"
          >
            <li><a href="#">个人中心</a></li>
            <li><a href="#">注销</a></li>
            <div class="clear"></div>
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
      show: false,
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    showMenu() {
      this.show = true;
    },
    hideMenu() {
      // setTimeout(() => {
      //   this.show = false;
      // }, 1000);
    },
  },
  components: {},
};
</script>
