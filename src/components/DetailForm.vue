<template>
  <div class="column justify-between items-stretch content-center col-12" v-if="item.id">
    <div class="column items-start q-px-sm with-padding-bottom col-12">
      <q-card-section :class="`q-mt-sm ${cardColor(item.sexe)}`">
        <div class="text-h6">{{ item.title }}</div>
      </q-card-section>

      <div class="column q-pt-md justify-start">
        <div class="text-subtitle1 q-pb-sm text-primary">{{ item.surname }}</div>
        <div class="text-body2">
          <q-icon name="fas fa-birthday-cake" size="1rem" color="primary"></q-icon>
          {{ item.age }} ans
        </div>
        <div class="text-body2">
          <q-icon name="fas fa-search" size="1rem" color="primary"></q-icon>
          Recherche un{{ item.sexeSearch === 'F' ? 'e' : '' }} {{ labelSexe[item.sexeSearch] }} entre {{ item.rangeAge.min }} et {{ item.rangeAge.max }} ans
        </div>

        <div class="q-py-md text-caption">
          <q-icon name="fas fa-clock" size="1rem" color="primary"></q-icon>
          {{ formatDate(item.publishDate) }}
        </div>
      </div>
      <q-separator inset></q-separator>
      <div class="column q-py-sm justify-start items-start">
        <div class="text-h6">Description</div>
        <div class="text-body2">{{ item.description }}</div>
      </div>
      <q-separator inset></q-separator>
      <div class="column q-py-sm justify-start items-start">
        <div class="text-h6">Localisation</div>
        <div class="text-body2">{{ item.localisation }}</div>
      </div>
      <q-separator inset></q-separator>
    </div>

    <q-page-sticky expand position="bottom">
      <q-toolbar class="row q-x-col-12 bg-accent text-white q-pa-md justify-between items-stretch">
        <div class="column items-center" @click="response()"><q-icon name="fas fa-pen" size="1.5rem" color="white"></q-icon>Ecrire</div>
        <div class="column items-center"><q-icon name="fas fa-exclamation-circle" @click="alert()" size="1.5rem" color="white"></q-icon>Signaler</div>
        <div class="column items-center" @click="remove()"><q-icon name="fas fa-trash" size="1.5rem" color="white"></q-icon>Supprimer</div>
        <div class="column items-center" @click="previous()"><q-icon name="fas fa-undo" size="1.5rem" color="white"></q-icon>Fermer</div>
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>

<style lang="stylus" scoped>
.q-card__section {
  padding: 5px;
}

hr {
  min-height: 1px !important;
}

.with-padding-bottom {
  padding-bottom: 80px;
}

.div-map {
  height: 120px;
}
</style>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import store from '~/store'
// import { isEmpty } from 'lodash'

export default {
  name: 'DetailForm',

  components: {},
  computed: {
    ...mapState('CommonStore', ['item', 'defaultProfil'])
  },
  data() {
    return {
      labelSexe: {
        M: 'homme',
        F: 'femme'
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
    response() {
      this.$router.push(`/response/${this.item.id}`)
    },
    previous() {
      store.dispatch('CommonStore/setItem', this.defaultProfil)
      this.$router.go(-1)
    },
    remove() {
      this.$router.push(`/remove/${this.item.id}`)
    },
    alert() {
      this.$router.push(`/alert/${this.item.id}`)
    }
  }
}
</script>
