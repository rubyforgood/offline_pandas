import auth, { API_URL } from '../auth'

export default class AuthenticatedRequest {
  constructor (path, options = {}) {
    const newOptions = Object.assign(
      {},
      {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + auth.token()
        })
      },
      options
    )

    return new Request(`${API_URL}${path}`, newOptions)
  }
}
