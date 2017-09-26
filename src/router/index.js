import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Register from '../containers/Register.vue'
import Login from '../containers/Login.vue'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
