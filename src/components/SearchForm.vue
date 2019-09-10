<template>
  <div class="col-12">
    <div class="row justify-center items-center content-center q-pa-md col-12" @click="dialog = true">
      <div class="col-xs-12">
        <q-input rounded v-model="resumeSearch" outlined readonly bg-color="input">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
    <q-dialog v-model="dialog" persistent maximized transition-show="slide-up" transition-hide="slide-down">
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Fermer</q-tooltip>
          </q-btn>
        </q-bar>
        <div class="bg-primary text-white row justify-center items-center content-center q-px-md col-12">
          <q-form @submit.prevent="search" ref="searchForm">
            <div class="col-xs-12">
              <h5>Je suis</h5>
            </div>
            <div class="row justify-center items-center content-center q-pb-md col-xs-12 col-sm-6 col-md-4 q-pl-md-md col-lg-3">
              <sexe-component v-model="formProfil.sexe" />
              <div class="col-xs-2 center">de</div>
              <q-input type="number" rounded outlined v-model="formProfil.age" label="Age" bg-color="input" class="col-4" lazy-rules :rules="[val => validAge(val)]" />
            </div>
            <div class="col-xs-12">
              <h5>Je recherche</h5>
            </div>
            <div class="q-pb-md col-xs-12">
              <q-input rounded outlined v-model="formCriteria.keywords" label="Mots clés" bg-color="input" />
            </div>
            <div class="q-pb-md col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <localisation-component types="town,department,region" :size="5" v-model="formCriteria.localisation" />
            </div>
            <div class="q-pb-md center col-xs-12 col-sm-6 q-pl-md-md col-md-4 col-lg-3">
              <sexe-component v-model="formCriteria.sexe" />
            </div>
            <div class="row justify-center items-center content-center q-pb-xl col-xs-12 col-sm-6 col-md-4 q-pl-md-md col-lg-3">
              <div class="col-2">Age</div>
              <div class="col-10">
                <q-range dark snap label color="blue" label-color="blue" v-model="formCriteria.rangeAge" :min="18" :max="99" />
              </div>
            </div>
            <div class="q-pb-md center col-xs-12 col-sm-12 col-lg-3">
              <q-btn rounded :loading="submitting" class="bg-button" label="Rechercher" type="submit">
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </div>
          </q-form>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="stylus">
.center {
  text-align: center;
}

.q-field__messages {
  color: $darkError;
}
</style>

<script>
import SexeComponent from '~/components/SexeComponent.vue'
import LocalisationComponent from '~/components/LocalisationComponent.vue'
import { mapState, mapGetters } from 'vuex'
import store from '~/store'
import { isEmpty } from 'lodash'

export default {
  name: 'SearchForm',

  components: {
    LocalisationComponent,
    SexeComponent
  },
  computed: {
    ...mapState('CommonStore', ['criteria', 'profil']),
    ...mapGetters('CommonStore', ['resumeSearch'])
  },
  data() {
    return {
      formCriteria: { ...this.criteria },
      formProfil: { ...this.profil },
      dialog: false,
      submitting: false
    }
  },
  mounted() {
    this.formCriteria = { ...this.criteria }
    this.formProfil = { ...this.profil }
  },
  watch: {
    criteria() {
      this.formCriteria = { ...this.criteria }
    },
    profil() {
      this.formProfil = { ...this.profil }
    }
  },
  methods: {
    close() {
      this.dialog = false
    },
    validAge(val) {
      return isEmpty(val) || (val && val > 17 && val < 100) || '18 à 99'
    },
    async search() {
      if (this.$refs.searchForm.validate()) {
        this.submitting = true
        await store.dispatch('CommonStore/search', {profil : this.formProfil, criteria: this.formCriteria, page: 1})
        this.submitting = false
        this.close()
      }
    }
  }
}
</script>
