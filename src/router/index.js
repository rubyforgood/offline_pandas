import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Locations from '@/components/Locations'
import Animals from '@/components/Animals'
import Behaviors from '@/components/Behaviors'
import Modifiers from '@/components/Modifiers'
import Observations from '@/components/Observations'
import auth from '../auth'

import ObservationSessionsStart from '@/components/ObservationSessions/Start'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Locations',
      component: Locations
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/animals',
      name: 'Animals',
      component: Animals
    },
    {
      path: '/behaviors',
      name: 'Behaviors',
      component: Behaviors
    },
    {
      path: '/modifiers',
      name: 'Modifiers',
      component: Modifiers
    },
    {
      path: '/observations/:id',
      name: 'Observations',
      component: Observations
    },
    {
      // list available ethograms
      path: '/observation_sessions/start',
      name: 'ObservationSessions.Start',
      component: ObservationSessionsStart
    }
  ]
})

router.beforeEach((to, from, next) => {
  auth.checkAuth()
  const isAuthenticated = auth.user.authenticated

  if ((to.name === 'Login') && isAuthenticated) {
    next('/')
  } else if ((to.name === 'Login') || isAuthenticated) {
    next()
  } else {
    next('/login')
  }
})

export default router
