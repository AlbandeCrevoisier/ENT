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
      name: 'landing',
      component: Landing
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
    },
    {
      path: '/register-parent',
      name: 'register-parent',
      component: RegisterParent
    },
    {
      path: '/register-sitter',
      name: 'register-sitter',
      component: RegisterSitter
    }
  ]
})
