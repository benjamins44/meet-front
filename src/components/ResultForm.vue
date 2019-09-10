<template>
  <div class="q-pt-lg col-12">
    <div ref="scrollTargetRef" class="row justify-center items-center col-12">
      <q-card class="q-mt-md flat my-card" v-for="item in result" :key="item.id" @click="goToDetail(item.id)">
        <q-card-section :class="cardColor(item.sexe)">
          <div class="text-subtitle2">{{ item.title }}</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="bg-input column">
          <div class="row justify-around">
            <div class="column justify-start">
              <div class="text-h6">{{ item.surname }}</div>
              <div class="text-body2">{{ item.age }} ans</div>
              <div class="text-body2">{{ item.town.label }}</div>
            </div>
            <div>&nbsp;</div>
            <div class="column justify-start items-end">
              <q-avatar class="q-mb-md" :color="logoColor(item.sexeSearch)" text-color="white" :icon="srcLogo(item.sexeSearch)">
                <q-icon name="search" size="1rem" />
              </q-avatar>

              <div class="text-body2">{{ item.rangeAgeMin }} - {{ item.rangeAgeMax }} ans</div>
            </div>
          </div>
        </q-card-section>
        <q-separator />

        <q-card-section class="bg-input column">
          <div class="column justify-start items-end">
            <div class="text-caption">{{ formatDate(item.publishedDate) }}</div>
          </div>
        </q-card-section>
      </q-card>
      <div class="next-div-button column justify-start items-end">
        <q-btn :loading="submitting" :hidden="!hasMoreResult" flat rounded color="primary" @click="nextResult()" icon="fas fa-angle-right" class="q-my-md" />
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.my-card, .next-div-button {
  width: 100%;
}

.q-card__section {
  padding: 5px;
}
</style>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import store from '~/store'
// import { isEmpty } from 'lodash'

export default {
  name: 'SearchForm',

  components: {},
  computed: {
    ...mapState('CommonStore', ['result', 'hasMoreResult', 'nextPage', 'profil', 'criteria'])
  },
  data() {
    return {
      submitting: false,
      labelSexe: {
        M: 'Homme',
        F: 'Femme'
      }
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY HH:mm')
    },
    srcLogo(sexe) {
      return `img:/assets/${sexe === 'M' ? 'man.svg' : 'female.svg'}`
    },
    cardColor(sexe) {
      return (sexe === 'M' ? 'bg-header-male' : 'bg-header-female') + ' text-white'
    },
    logoColor(sexe) {
      return sexe === 'M' ? 'header-male' : 'header-female'
    },
    async nextResult() {
      this.submitting = true
      console.log(this.nextPage)
      await store.dispatch('CommonStore/search', {profil: this.profil, criteria: this.criteria, page: this.nextPage})
      this.submitting = false
    },
    goToDetail(id) {
      const route = `/detail/${id}`
      this.$router.push(route)
    }
  }
}
</script>
