<template>
   <q-select
      rounded
      :options="suggestReferentialLocal"
      outlined
      v-model="localisation"
      label="Localisation"
      bg-color="input"
      @filter="filterFn"
    />
</template>

<style lang="stylus" scoped>
</style>

<script>
import { mapState } from 'vuex'
import store from '~/store'

export default {
  name: 'LocalisationComponent',
  props: {
    localisation: Object,
    types: String,
    size: Number
  },
  model: {
    prop: 'localisation',
    event: 'localisationchange'
  },
  data() {
    return {
      suggestReferentialLocal: []
    }
  },
  computed: {
    ...mapState('CommonStore', ['suggestReferential']),
    localisationLocal: {
      get: function() {
        return this.localisation
      },
      set: function(value) {
        this.$emit('localisationchange', value)
      }
    }
  },
  watch: {
    suggestReferential() {
      this.suggestReferentialLocal = this.suggestReferential 
    }
  },
  methods: {
    filterFn (val, update, abort) {
      // call abort() at any time if you can't retrieve data somehow
      update(() => {
        if (val === '' || val.length < 3) {
          this.suggestReferentialLocal = []
        }
        else {
          store.dispatch('CommonStore/setProfil', { size, types, keyword : val })
        }
      })
    }
  }
}
</script>
