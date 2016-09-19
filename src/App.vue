<style lang="less">
@import "./styles/base/normalize.css";
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store';
export default {
  store,
};
</script>
