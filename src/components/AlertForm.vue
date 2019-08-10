<template>
  <div class="q-pa-md col-12" v-if="item.id">
    <q-form @submit.prevent="submit" ref="postForm">
      <div class="justify-center items-center content-center q-px-md col-12">
        <div class="col-xs-12">
          <h5>Alert sur l'annonce de {{ item.surname}}</h5>
        </div>
        <div class="q-pb-md col-xs-12">
          <q-input
            rounded
            outlined
            v-model="formProfil.email"
            label="Votre email *"
            bg-color="input"
            type="email"
            lazy-rules
            :rules="[val => this.require(val)]"
          />
        </div>
        <div class="col-xs-12">
          <q-input
            type="textarea"
            rounded
            outlined
            v-model="formProfil.description"
            label="Votre message *"
            bg-color="input"
            lazy-rules
            :rules="[val => this.require(val)]"
          />
        </div>
        <div class="row justify-center items-center content-center col-xs-12 q-mt-md">
          <q-btn
            :loading="submitting"
            color="input"
            type="submit"
            rounded
            class="bg-button"
            label="Envoyer"
          />
          <q-btn flat color="primary" @click="previous()" label="Annuler" class="q-ml-sm" />
        </div>
      </div>
    </q-form>
  </div>
</template>

<style lang="stylus" scoped>
.q-card__section {
  padding: 5px;
}

hr {
  min-height: 1px !important;
}
</style>

<script>
import { mapState } from 'vuex'
import store from '~/store'
import ValidationMixin from '~/mixins/ValidationMixin'

export default {
  name: 'AlertForm',
  mixins: [ValidationMixin],
  computed: {
    ...mapState('CommonStore', ['item', 'defaultProfil'])
  },
  data() {
    return {
      formProfil: { ...this.defaultProfil },
      submitting: false
    }
  },
  mounted() {
    this.formProfil = { ...this.defaultProfil }
  },
  methods: {
    async submit() {
      this.submitting = true
      await store.dispatch('CommonStore/alert', this.formProfil)
      this.submitting = false
      this.$router.push('/alert/confirm')
    },
    previous() {
      this.$router.go(-1)
    }
  }
}
</script>
