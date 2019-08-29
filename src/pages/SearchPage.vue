<template>
  <q-page style="padding-top: 60px" class="q-pa-md">
    <result-form></result-form>

    <q-page-sticky position="top" expand class="bg-accent text-white">
      <search-form></search-form>
    </q-page-sticky>
  </q-page>
</template>

<style scoped></style>

<script>
import SearchForm from '../components/SearchForm.vue'
import ResultForm from '../components/ResultForm.vue'

export default {
  name: 'SearchPage',
  components: { SearchForm, ResultForm }
}
</script>
