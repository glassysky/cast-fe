import Vue from 'vue';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';
import App from './App';
import router from './router';
import store from './vuex/store';

Vue.use(VueResource);

sync(store, router);

router.start(App, '#root');
