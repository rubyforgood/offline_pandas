import router from '../router'

// URL and endpoint constants
export const API_URL = process.env.NODE_ENV === 'production' ? 'https://save-the-animals.herokuapp.com' : 'http://localhost:3000'
const LOGIN_URL = API_URL + '/api/auth'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login (context, creds) {
    const request = new Request(LOGIN_URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(creds)
    })

    return fetch(request)
    .then((response) => {
      return response.json()
    }).then((data) => {
      localStorage.setItem('jwt_token', data.jwt_token)

      this.user.authenticated = true

      // Redirect to root
      router.push({ name: 'Locations' })
    }).catch((err) => {
      context.error = err
    })
  },

  // To log out, we just need to remove the token
  logout () {
    localStorage.removeItem('jwt_token')
    this.user.authenticated = false
  },

  checkAuth () {
    var jwt = localStorage.getItem('jwt_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authenticated requests
  token () {
    return localStorage.getItem('jwt_token')
  }
}
