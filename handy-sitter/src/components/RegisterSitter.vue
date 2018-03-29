<template>
  <div>
    <h1>Bienvenue sur Handy-Sitter</h1>
    <h2>Garde d'enfants handicapés</h2>
    <h3>S'enregistrer</h3>
    <h4>Sitter</h4>
    <b-container>
      <b-form-row>
        <b-col>
          <label class='sr-only' for='nameIn'>Name</label>
		  <b-form-input id='nameIn' placeholder='Prénom' />
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <label class='sr-only' for='surnameIn'>Surame</label>
		  <b-form-input id='surnameIn' placeholder='Nom' />
		</b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <label class='sr-only' for='eMailIn'>e-Mail</label>
		  <b-form-input id='eMailIn' type='email' placeholder='e-Mail' />
		</b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <label class='sr-only' for='passIn'>Password</label>
		  <b-form-input id='passIn' type='password' placeholder='Mot de passe' />
		</b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <label class='sr-only' for='passConfirm'>Confirm Password</label>
		  <b-form-input id='passConfirm' type='password' placeholder='Confirmez le mot de passe' />
		</b-col>
      </b-form-row>
    </b-container>
    <b-button variant='primary'>Suivant</b-button>
  </div>
</template>

<script>
export default {
  name: 'register-sitter',
  data () {
    return {
    }
  }
}
</script>
