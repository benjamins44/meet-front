<template>
  <div class="fixed-center text-center">
    <q-icon class="q-pb-xs" color="primary" size="4rem" name="fas fa-heart"></q-icon>
    <h6>Merci d'avoir répondu à cettre annonce.</h6>
    <q-btn flat rounded color="primary" @click="$router.go(-2)">Retour au détail</q-btn>
  </div>
</template>

<script>
export default {
  name: 'ConfirmResponsePage'
}
</script>
