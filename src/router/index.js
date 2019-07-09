import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/Music/Music'
import Mine from '@/components/Mine/Mine'
import Playing from '@/components/Playing'
import Login from '@/components/Mine/Login'
import Register from '@/components/Mine/Register'
import HistoryMusic from '@/components/Mine/HistoryMusic'
import Recommend from '@/components/Music/Pages/Recommend'
import Singer from '@/components/Music/Pages/Singer'
import Search from '@/components/Music/Pages/Search'
import List from '@/components/Music/Pages/List'
import { homedir } from 'os';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/Music'
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
      children:[
         {
           path: 'recommend', 
           name: Recommend,
           component: Recommend
         },
         {
          path: 'singer', 
          name: Singer,
          component: Singer
        },
        {
          path: 'list', 
          name: List,
          component: List
        },
        {
          path: 'search', 
          name: Search,
          component: Search
        }
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: 'historyMusic', 
      name: 'HistoryMusic',
      component: HistoryMusic
    },
    {
      path: 'login', 
      name: 'Login',
      component: Login
    },
    {
      path: 'register', 
      name: 'Register',
      component: Register
    },
    {
      path: '/playing',
      name: 'Playing',
      component: Playing
    },
  ]
})
