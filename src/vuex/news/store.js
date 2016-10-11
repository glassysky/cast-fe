import * as T from '../mutation-types';

const state = {
  newsList: {},
  newsTotal: 0,
  newsCurrentPage: 0,
};

const mutations = {
  [T.SET_NEWS_LIST](state, data) {
    state.newsList = data;
  },
  [T.SET_NEWS_TOTAL](state, data) {
    state.newsTotal = data;
  },
  [T.SET_CURRENT_PAGE](state, data) {
    state.newsCurrentPage = data;
  },
};

export default {
  state,
  mutations,
};
