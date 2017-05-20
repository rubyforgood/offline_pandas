import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Locations from '@/components/Locations'
import Animals from '@/components/Animals'
import Behaviors from '@/components/Behaviors'
import Modifiers from '@/components/Modifiers'
import Observations from '@/components/Observations'

import ObservationSessionsStart from '@/components/ObservationSessions/Start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Locations
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
