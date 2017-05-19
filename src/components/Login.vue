<template>
  <div class="login">
    <img src="../assets/renee-the-panda.png">
    <h1>Welcome!</h1>
    <h2> Please login</h2>
    <div>
      <input type="text" name="email" placeholder="Email" v-model="credentials.email" />
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" v-model="credentials.password" />
    </div>
    <div>
      <input type="submit" class="btn bg-green b--green white ba br1" value="Log In" v-on:click="onSubmit" />
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
  .btn {
    padding: 10px 15px;
  }
</style>
