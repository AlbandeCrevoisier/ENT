<template>
  <div>
    <h1>Bienvenue sur Handy-Sitter</h1>
    <h2>Garde d'enfants handicapés</h2>
    <h3>S'enregistrer</h3>
    <h4>Parent</h4>
    <b-button variant='primary' @click='addChild'>Enregistrer un enfant</b-button>
  </div>
</template>

<script>
export default {
  name: 'register-parent',
  data () {
    return {
    }
  },
  methods: {
    addChild: function () {
      // Add a child component
    }
  }
}
</script>
