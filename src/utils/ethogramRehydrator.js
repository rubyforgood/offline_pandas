export default function ethogramRehydrator () {
  return function (store) {
    store.commit('ethograms/rehydrateData', { data: locallyStoredEthograms() })
    store.subscribe((mutation, state) => {
      if (mutation.type.split('/')[0] === 'ethograms') {
        storeEthograms(state.ethograms.data)
      }
    })
  }
}

function locallyStoredEthograms () {
  return JSON.parse(window.localStorage.getItem('ethograms')) || {}
}

function storeEthograms (ethograms) {
  window.localStorage.setItem('ethograms', JSON.stringify(ethograms))
}
