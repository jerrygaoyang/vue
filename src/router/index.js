import Vue from 'vue'
import Router from 'vue-router'
import Index from '../containers/Index.vue'
import Register from '../containers/Register.vue'
import Login from '../containers/Login.vue'
import ResetPassword from '../containers/ResetPassword.vue'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/reset_password',
      name: 'ResetPassword',
      component: ResetPassword
    }
  ]
})
