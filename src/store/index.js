import Vue from 'vue'
import Vuex from 'vuex'
import CommonStore from '~/store/modules/common'

// import example from './module-example'

Vue.use(Vuex)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default new Vuex.Store({
  modules: {
    CommonStore
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})
