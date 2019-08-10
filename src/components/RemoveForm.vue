<template>
  <div class="q-pa-md col-12" v-if="item.id">
    <q-form @submit.prevent="submit" ref="postForm">
      <div class="justify-center items-center content-center q-px-md col-12">
        <div class="col-xs-12">
          <h5>Supprimer le message de {{ item.surname}}</h5>
        </div>
        <div class="column col-xs-12 q-pt-md justify-start">
          <div
            class="text-subtitle1 q-pb-sm text-primary"
          >Merci d'entrer le mot de passe que vous avez renseignez lors de la publication de l'annonce.</div>
        </div>
        <div class="q-pb-md col-xs-12">
          <q-input
            rounded
            outlined
            v-model="formProfil.password"
            label="Mot de passe *"
            bg-color="input"
            type="password"
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
            label="Supprimer"
          />
          <q-btn flat color="primary" @click="previous()" label="Annuler" class="q-ml-sm" />
        </div>
      </div>
    </q-form>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import store from '~/store'
import ValidationMixin from '~/mixins/ValidationMixin'

export default {
  name: 'RemoveForm',
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
      await store.dispatch('CommonStore/remove', this.formProfil)
      this.submitting = false
      this.$router.push('/remove/confirm')
    },
    previous() {
      this.$router.go(-1)
    }
  }
}
</script>
