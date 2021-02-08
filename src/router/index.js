import Vue from 'vue'
import VueRouter from 'vue-router'

// import test from '../components/test'
Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Register',
      component: () => import('../components/Dashboard')
    },
    {
      path: '/Registration',
      name: 'Registration',
      props: true,
      component: () => import('../components/Registration')
    },

    {
      path: '/Registrationdetails',
      name: 'Registrationdetails',
      props: true,
      component: () => import('../components/Registrationdetails')
    },

    
  ]
})


export default router
