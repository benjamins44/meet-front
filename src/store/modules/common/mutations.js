const mutations = {
  setProfil(state, profil) {
    state.profil = profil
  },
  setCriteria(state, criteria) {
    state.criteria = criteria
  },
  setResult(state, result) {
    state.result = result
  },
  setItem(state, item) {
    state.item = item
  },
  setHasMoreResult(state, hasMoreResult) {
    state.hasMoreResult = hasMoreResult
  },
  setTitlePage(state, titlePage) {
    state.titlePage = titlePage
  },
  setSuggestReferential(state, suggestReferential) {
    state.suggestReferential = suggestReferential
  }
}

export default mutations
