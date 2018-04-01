<template>
  <div>
    <h1>Bienvenue sur Handy-Sitter</h1>
    <h2>Garde d'enfants handicapés</h2>
    <h3>S'enregistrer</h3>
    <h4>Parent</h4>
    <RegisterParentChild v-for='child in children.children' :key='child.name' :parentIdx='parentIdx'/>
    <b-button variant='primary' @click='addChild'>Ajouter un enfant</b-button>
    <b-button variant='primary' @click='delChild'>Supprimer un enfant</b-button>
    <b-button variant='primary' @click='registerChildren'>Enregistrer</b-button>
  </div>
</template>

<script>
import RegisterParentChild from './RegisterParentChild'
export default {
  name: 'RegisterParent',
  props: ['parentIdx'],
  data () {
    return {
      children: {pIdx: this.parentIdx, children: []}
    }
  },
  components: {RegisterParentChild},
  methods: {
    addChild: function () {
      this.children.children.push({})
    },
    delChild: function () {
      this.children.children.pop()
    },
    registerChildren: function () {
      this.$store.commit('addChild', {...this.children})
    }
  }
}
</script>
