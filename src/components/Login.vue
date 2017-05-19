<template>
  <div class="login">
    <img src="../assets/renee-the-panda.png">
    <h1>Welcome!</h1>
    <h2> Please login</h2>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" name="email" placeholder="Email" v-model="credentials.email" />
      <input type="password" name="password" placeholder="Password" v-model="credentials.password" />
      <input type="submit" class="btn btn-primary" value="Log In" />
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
      credentials: 'credentials',
      error: 'error'
    })
  },
  methods: {
    onSubmit (e) {
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

<style>
  .login {
    padding-top: 60px;
  }
</style>
