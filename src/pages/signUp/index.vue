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
              <input type="text" v-model="username">
            </div>
            <div class="form_control">
              <label for="">学号</label>
              <input type="text" v-model="stuId">
            </div>
            <div class="form_control">
              <label for="">姓名</label>
              <input type="text" v-model="name">
            </div>
            <div class="form_control">
              <label for="">手机</label>
              <input type="tel" v-model="tel">
            </div>
            <div class="form_control">
              <label for="">邮箱</label>
              <input type="email" v-model="email">
            </div>
            <div class="form_control">
              <label for="">QQ</label>
              <input type="text" v-model="qq">
            </div>
            <div class="form_control">
              <label for="">密码</label>
              <input type="password" v-model="password">
            </div>
            <div class="form_control">
              <label for="">确认密码</label>
              <input type="password" v-model="rePassword">
            </div>
            <div class="form_control">
              <button
                type="button"
                name="button"
                class="btn"
                :class="{ 'button_hover': buttonHover }"
                @mouseOver="buttonMouseOver"
                @mouseOut="buttonMouseOut"
                @click="signUp"
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
import Request from '../../utils/request';
export default {
  data() {
    return {
      buttonHover: false,
      username: '',
      name: '',
      stuId: '',
      tel: '',
      email: '',
      qq: '',
      password: '',
      rePassword: '',
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
    signUp() {
      Request.post({
        url: '/user/sign-up',
        data: {
          user_name: this.username,
          name: this.name,
          stu_id: this.stuId,
          tel: this.tel,
          email: this.email,
          qq: this.qq,
          password: this.password,
        },
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error(err);
      });
    },
  },
  components: {},
};
</script>
