<template>
  <transition name="slide-slideup">
    <div class="locations">
      <div class="pa4 flex flex-row flex-wrap items-center justify-start">
        <div class="flex-auto pa1 tc">Locations</div>
      </div>
      <div v-if='message'>{{ message }}</div>
      <div class='f5 flex flex-row flex-wrap items-center justify-around pa2'>
        <div v-for='location in locations'>
          <a @click='chooseLocation(location.id)' class='flex link pa3 mh2 mv3 ba b--gray br3 shadow-3 bg-white'>
            {{ location.name }}
          </a>
        </div>
      </div>
      <a @click='fetchEthograms' class='link f6 pa1 mv5 b--gray br3 shadow-3 bg-white'>
        refresh
      </a>
      <a @click='logout' class='absolute bottom-0 right-0 link f6 pa1 ma3 b--gray br3 shadow-3 bg-white'>
        logout
      </a>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'locations',
  computed: {
    ...mapState('ethograms', {
      locations (store) {
        return store.data
      }
    }),
    online () {
      return this.$networkStatus.isOnline()
    },
    message () {
      const anyLocations = Object.values(this.locations).length > 0
      const loading = this.$store.state.ethograms.loading
      const error = this.$store.state.ethograms.error

      if (!this.online && !anyLocations) {
        return "No internet connection, so we can't load locations. Please try pre-loading locations before going out into the field."
      } else if (!this.online) {
        return 'No internet connection. Pre-loaded locations only.'
      } else if (loading) {
        return 'Loading...'
      } else if (error) {
        return 'Could not load new locations.'
      } else {
        return null
      }
    }
  },
  methods: {
    ...mapActions('observations', [
      'createObservation',
      'createObservationSession'
    ]),
    ...mapActions('ethograms', {
      fetchEthograms: 'fetchAll'
    }),
    logout () {
      localStorage.removeItem('jwt_token')
      this.$router.push('/login')
    },
    chooseLocation (locationId) {
      return this.createObservationSession({ locationId })
              .then(this.createObservation.bind(this))
              .then((newObservation) => {
                const newObservationId = newObservation.id
                this.$router.push(`observations/${newObservationId}`)
              })
    }
  },
  beforeMount () {
    if (this.online) this.fetchEthograms()
  }
}
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-slideup-enter-active {
  transition: all .3s ease;
}
.slide-slideup-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-slideup-leave {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
