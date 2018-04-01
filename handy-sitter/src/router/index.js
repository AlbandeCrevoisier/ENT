import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Register from '@/components/Register'
import RegisterParent from '@/components/RegisterParent'
import RegisterSitter from '@/components/RegisterSitter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
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
      path: '/register-parent/:parentIdx',
      name: 'RegisterParent',
      component: RegisterParent,
      props: true
    },
    {
      path: '/register-sitter/:sitterIdx',
      name: 'RegisterSitter',
      component: RegisterSitter,
      props: true
    }
  ]
})
