import Vue from 'vue'
import Home from '@/components/Home'
import Find from '@/components/Find'
import Router from 'vue-router'
import App from '@/App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    }
  ]
})
