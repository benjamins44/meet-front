<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>On se rencontre</q-toolbar-title>
    </q-toolbar>
    <q-list>
      <q-item
        v-for="(item, i) in items"
        :key="i"
        clickable
        :to="item.navigation"
        v-ripple
        :active="link === item.key"
        @click="link = item.key"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-layout>
</template>

<style lang="stylus">
.my-menu-link {
  color: white;
  background: $secondary;
}
</style>

<script>
export default {
  name: 'MenuForm',
  data() {
    return {
      link: 'search',
      items: [
        {
          key: 'search',
          icon: 'fas fa-search',
          title: 'Rechercher',
          navigation: '/search'
        },
        {
          key: 'post',
          icon: 'fas fa-pen',
          title: 'Déposer une annonce',
          navigation: '/post'
        }
      ]
    }
  }
}
</script>
