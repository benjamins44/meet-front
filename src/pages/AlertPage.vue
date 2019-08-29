<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <alert-form></alert-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style></style>

<script>
import AlertForm from '../components/AlertForm.vue'
import PageIdMixin from '~/mixins/PageIdMixin'

export default {
  name: 'AlertPage',
  mixins: [PageIdMixin],
  components: { AlertForm }
}
</script>
