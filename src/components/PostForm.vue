<template>
  <div class="col-12">
    <q-form @submit.prevent="submit" ref="postForm">
      <q-stepper flat v-model="step" vertical ref="stepper" color="primary" animated>
        <q-step :name="1" title="Je suis" icon="fas fa-presentation" :done="step > 1">
          <div class="q-pb-md col-xs-12">
            <q-input rounded outlined v-model="formProfil.title" label="Titre *" bg-color="input" lazy-rules :rules="[val => this.require(val)]" />
          </div>
          <div class="q-pb-md col-xs-12">
            <q-input rounded outlined v-model="formProfil.surname" label="Surnom *" bg-color="input" lazy-rules :rules="[val => this.require(val)]" />
          </div>
          <div class="row justify-center items-center content-center q-pb-md col-xs-12">
            <div class="col-xs-6">
              <sexe-component v-model="formProfil.sexe" />
            </div>
            <div class="col-xs-6">
              <q-input rounded outlined v-model="formProfil.age" label="Age *" bg-color="input" lazy-rules :rules="[val => this.validAge(val)]" />
            </div>
          </div>
          <div class="q-pb-md col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <localisation-component types="town" :size="5" v-model="formProfil.localisation" lazy-rules label="Localisation *" :rules="[val => this.require(val)]" />
          </div>
        </q-step>

        <q-step :name="2" title="Je me décris" icon="fas fa-align-justify" :done="step > 2">
          <div class="col-xs-12">
            <q-input
              type="textarea"
              rounded
              outlined
              v-model="formProfil.description"
              label="Description *"
              bg-color="input"
              :lazy-rules="lazyRules2"
              :rules="rulesRequired2"
            />
          </div>
        </q-step>
        <q-step :name="3" title="Je recherche" icon="search" :done="step > 3">
          <div class="row justify-center items-center content-center q-pb-md col-xs-12 col-sm-6 col-md-4 q-pl-md-md col-lg-3">
            <div class="q-pb-md col-xs-6">
              <sexe-component v-model="formProfil.sexeSearch" />
            </div>
            <div class="row justify-center items-center content-center col-xs-12">
              <div class="col-2">Age</div>
              <div class="col-10">
                <q-range snap label color="blue" label-color="blue" v-model="formProfil.rangeAge" :min="18" :max="99" />
              </div>
            </div>
          </div>
        </q-step>
        <q-step :name="4" title="Je valide" icon="fas fa-check" :done="step > 4">
          <div class="col-xs-12">
            <q-input type="email" rounded outlined v-model="formProfil.email" label="Email *" bg-color="input" :lazy-rules="lazyRules4" :rules="rulesRequired4" />
          </div>
          <div class="col-xs-12">
            <q-input
              type="password"
              rounded
              outlined
              v-model="formProfil.password"
              label="Mot de passe *"
              bg-color="password"
              :lazy-rules="lazyRules4"
              :rules="rulesRequired4"
            />
          </div>
        </q-step>
        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn v-if="step <= 4" :loading="submitting" color="input" type="submit" rounded class="bg-button" :label="step < 4 ? 'Continuer' : 'Terminer'" />
            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Retour" class="q-ml-sm" />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </q-form>
  </div>
</template>

<style>
.center {
  text-align: center;
}
</style>

<script>
import SexeComponent from './SexeComponent.vue'
import LocalisationComponent from '~/components/LocalisationComponent.vue'
import { mapState } from 'vuex'
import ValidationMixin from '~/mixins/ValidationMixin'
import store from '~/store'

export default {
  name: 'PostForm',
  mixins: [ValidationMixin],
  components: {
    LocalisationComponent,
    SexeComponent
  },
  data() {
    return {
      formProfil: { ...this.defaultProfil },
      step: 1,
      submitting: false,
      optionsLocalisation: ['Ligné', 'Nantes', 'Paris'],
      lazyRules2: false,
      lazyRules4: false,
      rulesRequired2: [],
      rulesRequired4: []
    }
  },
  mounted() {
    this.formProfil = { ...this.defaultProfil }
  },
  computed: {
    ...mapState('CommonStore', ['defaultProfil'])
  },
  methods: {
    async submit() {
      this.lazyRules2 = false
      this.lazyRules4 = false
      this.rulesRequired2 = []
      this.rulesRequired4 = []
      switch (this.step) {
        case 1:
          this.lazyRules2 = true
          this.rulesRequired2 = [val => this.require(val)]
          break
        case 2:
          break
        case 3:
          this.lazyRules4 = true
          this.rulesRequired4 = [val => this.require(val)]
          break
      }
      if (this.$refs.postForm.validate()) {
        if (this.step < 4) {
          this.$refs.stepper.next()
        } else {
          this.submitting = true
          await store.dispatch('CommonStore/post', this.formProfil)
          this.submitting = false
          this.$router.push('/post/confirm')
        }
      }
    }
  }
}
</script>
