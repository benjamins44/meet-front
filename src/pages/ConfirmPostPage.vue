<template>
  <div class="fixed-center text-center">
    <q-icon class="q-pb-xs" color="primary" size="4rem" name="fas fa-smile"></q-icon>
    <h6>Merci d'avoir postée votre annonce.</h6>
    <h6>Elle va être analysée par nos équipes.</h6>
    <q-btn rounded color="input" class="bg-button" @click="$router.push('/search')">Rechercher</q-btn>
  </div>
</template>

<script>
export default {
  name: 'ConfirmPostPage'
}
</script>
