import * as T from '../mutation-types';

const state = {
  newsList: {},
  newsTotal: 0,
};

const mutations = {
  [T.SET_NEWS_LIST](state, data) {
    state.newsList = data;
  },
  [T.SET_NEWS_COUNT](state, data) {
    state.newsTotal = data;
  },
};

export default {
  state,
  mutations,
};
