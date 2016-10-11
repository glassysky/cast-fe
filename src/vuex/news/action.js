import * as T from '../mutation-types';

const setNewsList = ({ dispatch }, data) => {
  dispatch(T.SET_NEWS_LIST, data);
};

const setNewsTotal = ({ dispatch }, data) => {
  dispatch(T.SET_NEWS_TOTAL, data);
};

const setNewsCurrentPage = ({ dispatch }, data) => {
  dispatch(T.SET_CURRENT_PAGE, data);
};

export {
  setNewsList,
  setNewsTotal,
  setNewsCurrentPage,
};
