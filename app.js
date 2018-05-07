var Vue = new require('vue');
var VueRouter = new require('vue-router');
Vue.use(VueRouter);


import Top from './Top.vue';
import Gallery from './Gallery.vue';

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  }
];


const router = new VueRouter({
//  mode: 'history',
  routes: routes,
});

const vue = new Vue({
  router
}).$mount('#app');


