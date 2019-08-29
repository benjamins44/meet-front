<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <detail-form></detail-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style></style>

<script>
import DetailForm from '../components/DetailForm.vue'
import PageIdMixin from '~/mixins/PageIdMixin'

export default {
  name: 'DetailPage',
  mixins: [PageIdMixin],
  components: { DetailForm }
}
</script>
