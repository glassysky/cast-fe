import * as T from '../mutation-types';

const showDropMenu = ({ dispatch }) => {
  dispatch(T.SHOW_NAV_DROPDOWN);
};

const hideDropMenu = ({ dispatch }) => {
  dispatch(T.HIDE_NAV_DROPDOWN);
};

const setUserName = ({ dispatch }, data) => {
  dispatch(T.SET_USER_NAME, data);
};

// const getUserName = ({ state }) => state.common.userName;

export {
  showDropMenu,
  hideDropMenu,
  setUserName,
  // getUserName,
};
