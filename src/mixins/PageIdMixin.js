import store from '~/store'
import { isEmpty } from 'lodash'

const PageIdMixin = {
  data() {
    return {
      currentId: String
    }
  },
  watch: {
    async currentId(newValue) {
      this.$q.loading.show()
      await store.dispatch('CommonStore/searchItem', newValue)
      this.$q.loading.hide()
    }
  },
  mounted() {
    this.changeRoute()
  },
  beforeRouteUpdate(to, from, next) {
    this.changeRoute()
    next()
  },
  methods: {
    changeRoute() {
      if (!isEmpty(this.$route.params.id)) {
        this.currentId = this.$route.params.id
      }
    }
  }
}

export default PageIdMixin
