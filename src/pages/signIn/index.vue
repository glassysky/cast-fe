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
              <input type="text" v-model="stuId">
            </div>
            <div class="form_control">
              <label for="">密码</label>
              <input type="password" v-model="password">
            </div>
            <div class="form_control">
              <button
                type="button"
                name="button"
                class="btn"
                :class="{ 'button_hover': buttonHover }"
                @mouseOver="buttonMouseOver"
                @mouseOut="buttonMouseOut"
                @click="signIn"
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
import Request from '../../utils/request';
import LS from '../../utils/localStorage';
import { setUserName } from '../../vuex/common/action';

export default {
  data() {
    return {
      buttonHover: false,
      password: '',
      stuId: '',
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
    signIn() {
      Request.post({
        url: '/user/sign-in',
        data: {
          password: this.password,
          stu_id: this.stuId,
        },
      }).then((res) => {
        if (res.code === 1) {
          const data = res.result.data;
          const userInfo = {
            id: data.id,
            user_name: data.user_name,
          };
          LS.set('cast_user', JSON.stringify(userInfo));
          LS.set('cast_jwt', res.result.token);
          this.setUserName(data.user_name);
          this.$router.go({
            path: '/',
          });
        }
      }).catch(() => {
      });
    },
  },
  components: {},
  vuex: {
    actions: {
      setUserName,
    },
  },
};
</script>
