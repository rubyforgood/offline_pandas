import Vue from 'vue'
import router from '@/router'
import auth from '@/auth'
import configureStore from '@/store'
import FakeNetworkStatus from '@/utils/FakeNetworkStatus'
import NetworkStatusPlugin from '@/utils/NetworkStatusPlugin'

const subject = () => {
  const networkStatus = new FakeNetworkStatus()
  Vue.use(NetworkStatusPlugin, { networkStatus })

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

    it('continues to any non-login page', done => {
      router.push('/')

      Vue.nextTick(() => {
        expect(wrapper.$el.className).to.equal('locations')
        done()
      })
    })

    it('redirects to root if navigating to login', done => {
      router.push('/login')

      Vue.nextTick(() => {
        expect(wrapper.$el.className).to.equal('locations')
        done()
      })
    })
  })

  describe('when user is not authenticated', done => {
    beforeEach(() => {
      auth.user.authenticated = false
    })

    it('redirects to login page', () => {
      const wrapper = subject()
      router.push('/')

      Vue.nextTick(() => {
        expect(wrapper.$el.className).to.equal('login')
        done()
      })
    })
  })
})
