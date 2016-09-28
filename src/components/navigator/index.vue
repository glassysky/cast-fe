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
            @click="toggleMenu"
          >glassysky</div>
          <ul
            class="personal_menu"
            v-if="isDropdownShow"
            transition="expand"
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
import {
  showDropMenu,
  hideDropMenu,
} from '../../vuex/common/action';

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
    toggleMenu() {
      if (this.isDropdownShow) {
        this.hideDropMenu();
      } else {
        this.showDropMenu();
      }
    },
  },
  components: {},
  vuex: {
    getters: {
      isDropdownShow: ({ common }) => common.isNavDropdownShow,
    },
    actions: {
      showDropMenu,
      hideDropMenu,
    },
  },
};
</script>
