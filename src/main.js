import Vue from 'vue'
import App from './containers/App.vue'
import router from './router'
import store from './store'
import $ from './assets/js/jquery-1.12.3.min'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './assets/css/style.css'


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
