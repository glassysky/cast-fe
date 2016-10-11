<style lang="less">
@import "./styles/base/reset.less";
@import "../node_modules/font-awesome/less/font-awesome.less";
</style>

<template>
  <div id="app">
    <navigator></navigator>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store';
import navigator from './components/navigator/index';
import LS from './utils/localStorage';
import { setUserName } from './vuex/common/action';
export default {
  store,
  components: {
    navigator,
  },
  ready() {
    this.getLocalStorage();
  },
  methods: {
    getLocalStorage() {
      let userInfo = null;
      userInfo = JSON.parse(LS.get('cast_user'));

      if (userInfo) {
        this.setUserName(userInfo.user_name);
      }
    },
  },
  vuex: {
    actions: {
      setUserName,
    },
  },
};
</script>
