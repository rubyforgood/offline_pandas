import Vue from 'vue'
import Login from '@/components/Login'

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor({ store: configureStore() }).$mount()
    expect(vm.$el.querySelector('.login h1').textContent)
      .to.equal('Welcome!')
  })
})
