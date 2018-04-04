<template>
  <b-container>
    <b-form-row>
      <b-col>
        <label class='sr-only' for='nameIn'>Name</label>
        <b-form-input id='nameIn' placeholder='Prénom' :value='name' />
      </b-col>
      <b-col>
        <label class='sr-only' for='surnameIn'>Surame</label>
        <b-form-input id='surnameIn' placeholder='Nom' value='surname'/>
      </b-col>
    </b-form-row>
  </b-container>
</template>

<script>
export default {
  name: 'RegisterParentChild',
  props: ['parentIdx', 'childIdx'],
  data () {
    return {}
  },
  computed: {
    name: {
      get () {
        return this.$store.state.parents[this.parentIdx].children[this.childIdx].name
      },
      set (v) {
        this.$store.commit('setChildName', {pIdx: this.parentIdx, cIdx: this.childIdx, name: v})
      }
    },
    surname: {
      get () {
        return this.$store.state.parents[this.parentIdx].children[this.childIdx].surname
      },
      set (v) {
        this.$store.commit('setChildSurname', {pIdx: this.parentIdx, cIdx: this.childIdx, surname: v})
      }
    }
  }
}
</script>
