import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Blog from '../components/Blog'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Details from '../components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/Details/:Pid',
      name: 'Details',
      component: Details
    }
  ]
})
