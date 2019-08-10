import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const CommonStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default CommonStore
