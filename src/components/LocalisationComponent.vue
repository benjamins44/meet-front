<template>
  <q-select
    rounded
    outlined
    :options="suggestReferentialLocal"
    option-value="code"
    option-label="labelFormatted"
    v-model="localisationLocal"
    bg-color="input"
    use-input
    input-debounce="500"
    @filter="filterFn"
    :lazy-rules="lazyRules"
    :rules="rules"
    :label="label"
  >
    <template v-slot:no-option>
      <q-item>Pas de résultat</q-item>
    </template>
  </q-select>
</template>

<style lang="stylus" scoped></style>

<script>
import { mapGetters } from 'vuex'
import store from '~/store'

export default {
  name: 'LocalisationComponent',
  props: {
    localisation: Object,
    label: {
      type: String,
      default: 'Localisation'
    },
    types: String,
    size: Number,
    lazyRules: {
      type: Boolean,
      default: false
    },
    rules: Array
  },
  model: {
    prop: 'localisation',
    event: 'localisationchange'
  },
  data() {
    return {
      suggestReferentialLocal: [],
      localisationLocal: Object
    }
  },
  computed: {
    ...mapGetters('CommonStore', ['suggestReferentialFormatted'])
  },
  mounted() {
    this.localisationLocal = this.localisation
    console.log('localisation: ' + JSON.stringify(this.localisation))
  },
  watch: {
    localisationLocal(value) {
      console.log(JSON.stringify(value))
      this.$emit('localisationchange', value)
    },
    suggestReferentialFormatted() {
      console.log('suggestReferentialFormatted')
      this.suggestReferentialLocal = this.suggestReferentialFormatted
      console.log(this.suggestReferentialFormatted)
    }
  },
  methods: {
    filterFn(val, update) {
      // call abort() at any time if you can't retrieve data somehow
      update(() => {
        console.log(`update`)
        if (val === '' || val.length < 3) {
          this.suggestReferentialLocal = []
        } else {
          store.dispatch('CommonStore/suggestReferential', { size: this.size, types: this.types, keyword: val })
        }
      })
    }
  }
}
</script>
