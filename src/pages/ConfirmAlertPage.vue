<template>
  <div class="fixed-center text-center">
    <q-icon class="q-pb-xs" color="primary" size="4rem" name="fas fa-exclamation-circle"></q-icon>
    <h6>Merci d'avoir envoyé une alerte sur cettre annonce.</h6>
    <h6>Nous allons l'analysée dans les plus brefs délais.</h6>
    <q-btn flat rounded color="primary" @click="$router.go(-2)">Retour au détail</q-btn>
  </div>
</template>

<script>
export default {
  name: 'ConfirmAlertPage'
}
</script>
