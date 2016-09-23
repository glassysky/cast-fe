import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home/index';
import SignIn from './pages/signIn/index';
import SignUp from './pages/signUp/index';
import Activity from './pages/activity/index';
import News from './pages/news/index';

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
  '/activity': {
    component: Activity,
  },
  '/news': {
    component: News,
  },
  '/sign-in': {
    component: SignIn,
  },
  '/sign-up': {
    component: SignUp,
  },
});

export default router;
