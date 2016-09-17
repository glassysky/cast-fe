import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home/index';

Vue.use(VueRouter);

// const router = new VueRouter({
//   history: true,
//   linkActiveClass: 'active',
//   saveScrollPosition: true,
//   suppressTransitionError: true,
// });

const router = new VueRouter();

router.map({
  '/': {
    component: Home,
  },
});

export default router;
