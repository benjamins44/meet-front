<template>
  <q-page style="padding-top: 60px" class="q-pa-md">
    <result-form></result-form>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        @input="changePage"
        v-model="localpage"
        color="grey"
        :max="totalPage"
        :max-pages="6"
        :direction-links="true"
        :boundary-numbers="true"
      >
      </q-pagination>
    </div>
    <q-page-sticky position="top" expand class="bg-accent text-white">
      <search-form></search-form>
    </q-page-sticky>
  </q-page>
</template>

<style scoped></style>

<script>
import SearchForm from '../components/SearchForm.vue'
import ResultForm from '../components/ResultForm.vue'
import store from '~/store'
import { mapState } from 'vuex'

export default {
  name: 'SearchPage',
  components: { SearchForm, ResultForm },
  data() {
    return {
      localpage: 1,
      maxPage: 1,
      localQueries: null
    }
  },
  computed: {
    ...mapState('CommonStore', ['page', 'totalPage'])
  },
  watch: {
    '$route' (to, from) {
      console.log('changement de route: ' + to + ' ' + from)
      console.log(to.query)
      this.loadSearch(to.query)
    },
    page(val) {
      this.localpage = parseInt(this.page)
      console.log(`change page ${val}`)
    }
  },

  mounted() {
    console.log('changement de la route')
    console.log(this.$route.query)
    this.loadSearch(this.$route.query)
  },
  methods: {
    async loadSearch(queries) {
      this.localQueries = queries
      await store.dispatch('CommonStore/search', { queries })
    },
    changePage(newPage) {
      console.log(`change page 2 ${newPage}`)
      if (this.localQueries) {
        this.localQueries.page = newPage   
        // store.dispatch('CommonStore/search', { queries: this.localQueries })
      }
    }
  }
}
</script>
