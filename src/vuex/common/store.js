import * as T from '../mutation-types';

const state = {
  isNavDropdownShow: false,
};

const mutations = {
  [T.SHOW_NAV_DROPDOWN](state) {
    state.isNavDropdownShow = true;
  },
};

export default {
  state,
  mutations,
};
