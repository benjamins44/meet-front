const mutations = {
  setQueries(state, queries) {
    state.queries = queries
  },
  setCriterias(state, criterias) {
    state.criterias = criterias
  },
  setResult(state, result) {
    state.result = result
  },
  setItem(state, item) {
    state.item = item
  },
  setTotal(state, total) {
    state.total = total
  },
  setNextPage(state, nextPage) {
    state.nextPage = nextPage
  },
  setPage(state, page) {
    state.page = page
  },
  setTotalPage(state, totalPage) {
    state.totalPage = totalPage
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
