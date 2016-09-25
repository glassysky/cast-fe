<style lang="less">
@import "./index.less";
</style>

<template lang="html">
  <div class="signup_background">
    <div class="signup_container">
      <div class="header">
      </div>
      <div class="body">
        <div class="form_wrap">
          <div class="form_header">
            cast <span> > </span> 注册
          </div>
          <div class="form">
            <div class="form_control">
              <label for="">用户名</label>
              <input type="text">
            </div>
            <div class="form_control">
              <label for="">学号</label>
              <input type="text">
            </div>
            <div class="form_control">
              <label for="">密码</label>
              <input type="password">
            </div>
            <div class="form_control">
              <label for="">确认密码</label>
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
                注册
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
