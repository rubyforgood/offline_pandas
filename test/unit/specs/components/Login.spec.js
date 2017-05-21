import Vue from 'vue'
import Login from '@/components/Login'
import configureStore from '@/store'

const subject = () => {
  return new Vue({
    template: '<Login/>',
    components: {
      Login
    },
    store: configureStore()
  }).$mount()
}

describe('Login.vue', () => {
  it('renders correct header', () => {
    const wrapper = subject()

    expect(wrapper.$el.querySelector('.login h1').textContent)
      .to.equal('Welcome!')
  })

  // TODO
  xdescribe('on successful form submission', () => {
    it('sumbits form from credentials in store', () => {

    })

    it('redirects to root', () => {

    })
  })

  xdescribe('on unsuccessful form submission', () => {
    it('renders error message', () => {

    })
  })
})
