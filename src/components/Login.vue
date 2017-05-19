<template>
  <div class="login">
    <img src="../assets/renee-the-panda.png">
    <h1>Welcome!</h1>
    <h2> Please login</h2>
    <div class="pv2">
      <input class="w5 pa2" type="text" name="email" placeholder="Email" v-model="credentials.email" />
    </div>
    <div class="pv2">
      <input class="w5 pa2" type="password" name="password" placeholder="Password" v-model="credentials.password" />
    </div>
    <div class="pv2">
      <input type="submit" class="bg-green b--green white ba pv2 ph3" value="Log In" v-on:click="onSubmit" />
    </div>
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
