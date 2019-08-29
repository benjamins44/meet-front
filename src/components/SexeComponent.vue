<template>
  <q-btn-toggle
    v-model="sexeLocal"
    class="my-custom-toggle"
    no-caps
    rounded
    unelevated
    toggle-text-color="white"
    toggle-color="toggle"
    color="white"
    text-color="primary"
    :options="[{ slot: 'one', value: 'M' }, { slot: 'two', value: 'F' }]"
  >
    <template v-slot:one>
      <div class="row items-center no-wrap">
        <q-icon name="fas fa-male" alt="Homme" />
      </div>
    </template>

    <template v-slot:two>
      <div class="row items-center no-wrap">
        <q-icon name="fas fa-female" alt="Femme" />
      </div>
    </template>
  </q-btn-toggle>
</template>

<style lang="stylus" scoped>
.my-custom-toggle {
  border: 1px solid $grey-5;
}
</style>

<script>
export default {
  name: 'SexeComponent',
  props: {
    sexe: String
  },
  model: {
    prop: 'sexe',
    event: 'sexechange'
  },
  computed: {
    sexeLocal: {
      get: function() {
        return this.sexe
      },
      set: function(value) {
        this.$emit('sexechange', value)
      }
    }
  }
}
</script>
