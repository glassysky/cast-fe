import Vue from 'vue';
import { PREFIX } from '../config/request';

export default {
  init(params) {
    if (!params.url) {
      throw new Error('The lack of url of request');
    }
    // Vue.http.headers.common['x-access-token'] = TOKEN;
    Vue.http.options.emulateJSON = true;
  },

  post(params) {
    return new Promise((resolve, reject) => {
      this.init(params);
      Vue.http.post(
        `${PREFIX}${params.url}`,
        params.data || {}
      ).then((res) => {
        resolve(res.data);
      }, (res) => {
        reject(res.data);
      });
    });
  },

  get(params) {
    return new Promise((resolve, reject) => {
      this.init(params);
      Vue.http.get(
        `${PREFIX}${params.url}`,
        params.data ? { params: params.data } : {}
      ).then((res) => {
        resolve(res.data);
      }, (res) => {
        reject(res.data);
      });
    });
  },
};
