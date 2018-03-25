import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

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
	}
  ]
})
