import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/Music'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import Login from '@/components/Login'
import Register from '@/components/Register'
import HistoryMusic from '@/components/HistoryMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Music',
      component: Music
    },
    {
      path: '/musci',
      name: 'Music',
      component: Music
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
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
      path: '/historyMusic',
      name: 'HistoryMusic',
      component: HistoryMusic
    },
  ]
})
