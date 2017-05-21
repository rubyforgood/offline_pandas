import Vue from 'vue'
import router from '@/router'
import auth from '@/auth'
import configureStore from '@/store'

const subject = () => {
  return new Vue({
    router: router,
    render: h => h('router-view'),
    store: configureStore()
  }).$mount()
}

describe('main', () => {
  before(() => {
    sinon.stub(auth, 'checkAuth')
  })

  describe('when user is authenticated', () => {
    let wrapper
    beforeEach(() => {
      auth.user.authenticated = true
      wrapper = subject()
    })

    it('continues to any non-login page', () => {
      router.push('/')

      expect(wrapper.$el.className).to.equal('locations')
    })

    it('redirects to root if navigating to login', () => {
      router.push('/login')

      expect(wrapper.$el.className).to.equal('locations')
    })
  })

  describe('when user is not authenticated', () => {
    beforeEach(() => {
      auth.user.authenticated = false
    })

    it('redirects to login page', () => {
      const wrapper = subject()
      router.push('/')

      expect(wrapper.$el.className).to.equal('login')
    })
  })
})
