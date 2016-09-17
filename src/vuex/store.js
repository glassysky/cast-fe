import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import home from './home/store';

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    home,
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : [],
});
