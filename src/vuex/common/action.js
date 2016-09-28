import * as T from '../mutation-types';

const showDropMenu = ({ dispatch }) => {
  dispatch(T.SHOW_NAV_DROPDOWN);
};

const hideDropMenu = ({ dispatch }) => {
  dispatch(T.HIDE_NAV_DROPDOWN);
};

export {
  showDropMenu,
  hideDropMenu,
};
