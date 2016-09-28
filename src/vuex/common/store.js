import * as T from '../mutation-types';

const state = {
  isNavDropdownShow: false,
};

const mutations = {
  [T.SHOW_NAV_DROPDOWN](state) {
    state.isNavDropdownShow = true;
  },
  [T.HIDE_NAV_DROPDOWN](state) {
    state.isNavDropdownShow = false;
  },
};

export default {
  state,
  mutations,
};
