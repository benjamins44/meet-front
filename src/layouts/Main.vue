<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-secondary">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>{{ titlePage }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-input">
      <menu-form></menu-form>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-page-scroller position="bottom-right">
      <q-btn fab icon="keyboard_arrow_up" color="red" />
    </q-page-scroller>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { mapState } from 'vuex'
import MenuForm from '../components/MenuForm'

export default {
  name: 'Main',
  components: {
    MenuForm
  },
  computed: {
    ...mapState('CommonStore', ['titlePage'])
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style></style>
