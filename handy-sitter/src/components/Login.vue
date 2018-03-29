<template>
  <div>
    <h1>Bienvenue sur Handy-Sitter</h1>
    <h2>Garde d'enfants handicapés</h2>
    <h3>Se connecter</h3>
    <b-form inline>
      <label class='sr-only' for='eMailIn'>e-Mail</label>
	  <b-form-input id='eMailIn' type='email' placeholder='e-Mail' />
      <label class='sr-only' for='passIn'>Password</label>
	  <b-form-input id='passIn' type='password' placeholder='Mot de passe' />
		<b-button variant='primary'>Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>
