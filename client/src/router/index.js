import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Auth from '@/components/Auth'
import Page from '@/components/Page'
import Listing from '@/components/Listing'
import Calendar from '@/components/Calendar'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/page/:id/',
      name: 'Page',
      component: Page,
      props: true,
      meta: { reuse: false }
    },
    {
      path: '/listing',
      name: 'Listing',
      component: Listing,
      props: true,
      meta: { reuse: false }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      props: true,
      meta: { reuse: false }
    }
  ]
})
