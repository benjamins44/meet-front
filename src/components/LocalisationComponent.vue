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
    clearable
    input-debounce="500"
    @filter="filterFn"
    :lazy-rules="lazyRules"
    :rules="rules"
    :label="label"
  >
    <template v-slot:no-option>
      <q-item>Veuillez entrer 3 caractères</q-item>
    </template>
  </q-select>
</template>

<style lang="stylus" scoped></style>

<script>
import { mapGetters } from 'vuex'
import { isEmpty } from 'lodash'
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
      localisationLocal: null
    }
  },
  computed: {
    ...mapGetters('CommonStore', ['suggestReferential'])
  },
  mounted() {
    this.localisationLocal = isEmpty(this.localisation.code) ? null : this.localisation
  },
  watch: {
    localisationLocal(value) {
      console.log(JSON.stringify(value))
      this.$emit('localisationchange', value)
    },
    suggestReferential() {
      console.log('suggestReferential')
      this.suggestReferentialLocal = this.suggestReferential
      console.log(this.suggestReferential)
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
