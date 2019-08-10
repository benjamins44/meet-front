<template>
  <div class="q-pa-md col-12" v-if="item.id">
    <q-form @submit.prevent="submit" ref="postForm">
      <div class="justify-center items-center content-center q-px-md col-12">
        <div class="col-xs-12">
          <h5>Envoyer un message à {{ item.surname}}</h5>
        </div>
        <div class="column col-xs-12 q-pt-md justify-start">
          <div class="text-subtitle1 q-pb-sm text-primary">Attention : Méfiez-vous ...</div>
        </div>
        <div class="q-pb-md col-xs-12">
          <q-input
            rounded
            outlined
            v-model="formProfil.surname"
            label="Votre nom *"
            bg-color="input"
            lazy-rules
            :rules="[val => this.require(val)]"
          />
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
        <div class="row justify-center items-center content-center q-pb-md col-xs-12">
          <div class="col-xs-6">
            <sexe-component v-model="formProfil.sexe" />
          </div>
          <div class="col-xs-6">
            <q-input
              rounded
              outlined
              v-model="formProfil.age"
              label="Age *"
              bg-color="input"
              lazy-rules
              :rules="[val => this.validAge(val)]"
            />
          </div>
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
import SexeComponent from './SexeComponent.vue'
import { mapState } from 'vuex'
import store from '~/store'
import ValidationMixin from '~/mixins/ValidationMixin'

export default {
  name: 'ResponseForm',
  mixins: [ValidationMixin],
  components: { SexeComponent },
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
      await store.dispatch('CommonStore/response', this.formProfil)
      this.submitting = false
      this.$router.push('/response/confirm')
    },
    previous() {
      this.$router.go(-1)
    }
  }
}
</script>
