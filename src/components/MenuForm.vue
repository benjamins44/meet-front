<template>
  <q-layout view="lHh Lpr lFf">
    <q-img src="/assets/logo.jpg">
      <div class="absolute-full text-h4 text-italic flex flex-center">On se rencontre</div>
    </q-img>
    <q-list>
      <q-item
        v-for="(item, i) in items"
        :key="i"
        clickable
        :to="item.navigation"
        v-ripple
        :active="link === item.key"
        @click="link = item.key"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">{{ item.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-layout>
</template>

<style lang="stylus"></style>

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
