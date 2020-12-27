import Vue from 'vue';
import App from './App';
import './fontAwesomeIcon.js'; // fontAwesomeIcon.js 불러옴

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
