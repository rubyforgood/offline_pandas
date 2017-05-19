<template>
  <div class="login">
    <h1>Welcome!</h1>
    <h2> Please login</h2>
    <form>
      <input type="hidden" name="token" v-bind:value="jwtToken">
      <input type="text" name="email" placeholder="Email" v-model="credentials.email">
      <input type="password" name="password" placeholder="Password" v-model="credentials.password">
      <button class="btn btn-primary" @click="submit()">Log In</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import auth from '../auth'

export default {
  name: 'login',
  computed: {
    ...mapState('login', {
      jwtToken: 'token',
      credentials: 'credentials',
      error: 'error'
    })
  },
  methods: {
    submit (e) {
      e.preventDefault()
      var credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }

      // We need to pass the component's this context
      // to properly make use of http in the auth service
      auth.login(this, credentials)
    }
  }
}
</script>
