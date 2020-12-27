import Vue from 'vue';
import App from './App';
import './fontAwesomeIcon.js'; // fontAwesomeIcon.js 불러옴
// import { store } from './store/store.js';

Vue.config.productionTip = false;

new Vue({
  // store,
  render: (h) => h(App),
}).$mount('#app');
