import PopulateResult from '~/services/PopulateResult'
import referentialApi from '~/services/api/referentialApi'

let i = 0

const actions = {
  async post({ commit }, profil) {
    return new Promise(resolve => {
      commit('setProfil', profil)
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
  async remove({ commit }, profil) {
    return new Promise(resolve => {
      commit('setProfil', profil)
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
  async response({ commit }, profil) {
    return new Promise(resolve => {
      commit('setProfil', profil)
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
  async alert({ commit }, profil) {
    return new Promise(resolve => {
      commit('setProfil', profil)
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
  async search({ commit }, { profil, criteria }) {
    commit('setProfil', profil)
    commit('setCriteria', criteria)
    console.log(`profil: ${JSON.stringify(profil)}`)
    console.log(`criteria: ${JSON.stringify(criteria)}`)

    return new Promise(resolve => {
      setTimeout(() => {
        i = 1
        commit('setResult', PopulateResult.generateProfils(10))
        commit('setHasMoreResult', true)
        resolve()
      }, 2000)
    })
  },
  async searchItem({ commit, state }, id) {
    console.log('searchitem : ' + state.item.id + '-' + id)
    return new Promise(resolve => {
      if (state.item.id === id) {
        resolve()
        return
      }
      setTimeout(() => {
        const items = state.result.filter(item => item.id === id)
        if (items && items.length > 0) {
          commit('setItem', items[0])
        } else {
          commit('setItem', ...PopulateResult.generateProfils(1))
        }
        resolve()
      }, 2000)
    })
  },
  nextResult({ commit, state }) {
    return new Promise(resolve => {
      setTimeout(() => {
        i++
        let newResult = [...state.result, ...PopulateResult.generateProfils(10)]
        commit('setResult', newResult)
        commit('setHasMoreResult', i < 10)
        resolve()
      }, 2000)
    })
  },
  async suggestReferential({ commit }, { keyword, size, types }) {
    const newResult = await referentialApi.findByKeyword(keyword, size, types)
    console.log(newResult)
    commit('setSuggestReferential', newResult)
  },
  setProfil({ commit }, profil) {
    commit('setProfil', profil)
  },
  setItem({ commit }, item) {
    commit('setItem', item)
  },
  setCriteria({ commit }, criteria) {
    commit('setCriteria', criteria)
  },
  setResult({ commit }, result) {
    commit('setResult', result)
  },
  setTitlePage({ commit }, titlePage) {
    commit('setTitlePage', titlePage)
  }
}
export default actions
