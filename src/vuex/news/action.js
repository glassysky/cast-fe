import * as T from '../mutation-types';

const setNewsList = ({ dispatch }, data) => {
  dispatch(T.SET_NEWS_LIST, data);
};

const setNewsTotal = ({ dispatch }, data) => {
  dispatch(T.SET_NEWS_TOTAL, data);
};

export {
  setNewsList,
  setNewsTotal,
};
