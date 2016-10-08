import * as T from '../mutation-types';

const state = {
  isNavDropdownShow: false,
  userName: '',
};

const mutations = {
  [T.SHOW_NAV_DROPDOWN](state) {
    state.isNavDropdownShow = true;
  },
  [T.HIDE_NAV_DROPDOWN](state) {
    state.isNavDropdownShow = false;
  },
  [T.SET_USER_NAME](state, data) {
    state.userName = data;
  },
};

export default {
  state,
  mutations,
};
