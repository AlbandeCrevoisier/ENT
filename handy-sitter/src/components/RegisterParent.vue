<template>
  <div>
    <h1>Bienvenue sur Handy-Sitter</h1>
    <h2>Garde d'enfants handicapés</h2>
    <h3>S'enregistrer</h3>
    <h4>Parent</h4>
    <RegisterParentChild
      v-for='child in children'
      :key='children.indexOf(child)'
      :childIdx='children.indexOf(child)'
      :parentIdx='parentIdx' />
    <b-button variant='primary' @click='addChild'>Ajouter un enfant</b-button>
    <b-button variant='primary' @click='delChild'>Supprimer un enfant</b-button>
    <b-button variant='primary' to='/'>Valider</b-button>
  </div>
</template>

<script>
import RegisterParentChild from './RegisterParentChild'
export default {
  name: 'RegisterParent',
  props: ['parentIdx'],
  data () {
    return {}
  },
  components: {RegisterParentChild},
  methods: {
    addChild () {
      var c = {name: '', surname: ''}
      this.$store.commit('addChild', {pIdx: this.parentIdx, child: c})
    },
    delChild () {
      this.$store.commit('popChild', this.parentIdx)
    }
  },
  computed: {
    children () {
      return this.$store.state.parents[this.parentIdx].children
    }
  }
}
</script>
