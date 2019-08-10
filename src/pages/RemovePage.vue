<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <remove-form></remove-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>
import RemoveForm from '../components/RemoveForm.vue'
import PageIdMixin from '~/mixins/PageIdMixin'

export default {
  name: 'RemovePage',
  mixins: [PageIdMixin],
  components: { RemoveForm }
}
</script>
