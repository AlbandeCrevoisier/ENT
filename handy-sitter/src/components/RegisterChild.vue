<template>
  <b-container>
    <b-form-row>
      <b-col>
        <label class='sr-only' for='nameIn'>Name</label>
        <b-form-input id='nameIn' placeholder='Prénom' />
      </b-col>
      <b-col>
        <label class='sr-only' for='surnameIn'>Surame</label>
        <b-form-input id='surnameIn' placeholder='Nom' />
      </b-col>
    </b-form-row>
  </b-container>
</template>

<script>
export default {
  name: 'register-child',
  props: ['childId'],
  data () {
    return {
    }
  }
}
</script>
