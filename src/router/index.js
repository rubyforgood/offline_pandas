import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/login',
      name: 'Login'
    }
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
