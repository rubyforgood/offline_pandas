import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Locations from '@/components/Locations'
import Animals from '@/components/Animals'
import Behaviors from '@/components/Behaviors'
import Modifiers from '@/components/Modifiers'

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
      // list available locations
      path: '/locations',
      name: 'Locations',
      component: Locations
    },
    {
      // list available locations
      path: '/animals',
      name: 'Animals',
      component: Animals
    },
    {
      // list available locations
      path: '/behaviors',
      name: 'Behaviors',
      component: Behaviors
    },
    {
      // list available locations
      path: '/modifiers',
      name: 'Modifiers',
      component: Modifiers
    },
    {
      // list available ethograms
      path: '/observation_sessions/start',
      name: 'ObservationSessions.Start'
    },
    {
      // subject names buttons
      path: '/observations/:id/subject',
      name: 'Observations.Subject'
    },
    {
      // behavior names buttons
      path: '/observations/:id/behavior',
      name: 'Observations.Behavior'
    },
    {
      // modifier names buttons
      path: '/observations/:id/modifier',
      name: 'Observations.Modifier'
    },
    {
      // target names buttons
      path: '/observations/:id/target',
      name: 'Observations.Target'
    },
    {
      // observation review page
      path: '/observations/:id/review',
      name: 'Observations.Review'
    }
  ]
})
