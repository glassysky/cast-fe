<style lang="less">
@import "./styles/base/normalize.css";
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
export default {
  store,
  components: {
    navigator,
  },
};
</script>
