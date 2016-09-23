<style lang="less">
@import "./index.less";
</style>

<template lang="html">
  <div class="signin_background">
    <div class="signin_container">
      <div class="header">
      </div>
      <div class="body">
        <div class="form_wrap">
          <div class="form_header">
            cast <span> > </span> 登陆
          </div>
          <div class="form">
            <div class="form_control">
              <label for="">学号</label>
              <input type="text">
            </div>
            <div class="form_control">
              <label for="">密码</label>
              <input type="password">
            </div>
            <div class="form_control">
              <button
                type="button"
                name="button"
                class="btn"
                :class="{ 'button_hover': buttonHover }"
                @mouseOver="buttonMouseOver"
                @mouseOut="buttonMouseOut"
              >
                登陆
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonHover: false,
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    buttonMouseOver() {
      this.buttonHover = true;
    },
    buttonMouseOut() {
      this.buttonHover = false;
    },
  },
  components: {},
};
</script>
