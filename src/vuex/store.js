import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import common from './common/store';
import home from './home/store';
import news from './news/store';

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    common,
    home,
    news,
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : [],
});
