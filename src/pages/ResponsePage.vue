<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <response-form></response-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>
import ResponseForm from '../components/ResponseForm.vue'
import PageIdMixin from '~/mixins/PageIdMixin'

export default {
  name: 'ResponsePage',
  mixins: [PageIdMixin],
  components: { ResponseForm }
}
</script>
