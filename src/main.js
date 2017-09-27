import Vue from 'vue'
import App from './containers/App.vue'
import router from './router'
import store from './store'
import $ from './assets/js/jquery-1.12.3.min.js'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import './assets/css/style.css'
import './assets/js/app.js'


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
