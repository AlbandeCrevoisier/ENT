<template>
  <div>
    <h3>Se connecter</h3>
    <b-form @submit='canLogin' inline>
      <label class='sr-only' for='eMailIn'>e-Mail</label>
      <b-form-input id='eMailIn'
                    type='email'
                    placeholder='e-Mail'
                    v-model='email'
                    required />
      <label class='sr-only' for='passIn'>Password</label>
      <b-form-input id='passIn'
                    type='password'
                    placeholder='Mot de passe'
                    v-model='pass'
                    required />
      <b-button type='submit' variant='primary' >Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    canLogin () {
      this.$router.push('/home')
    }
  }
}
</script>
