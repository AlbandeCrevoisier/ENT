<template>
  <div>
    <h1>Bienvenue sur Handy-Sitter</h1>
    <h2>Garde d'enfants handicapés</h2>
    <h3>S'enregistrer</h3>
    <b-container>
      <b-form-row>
        <b-col>
          <label class='sr-only' for='nameIn'>Name</label>
          <b-form-input v-model='infos.name' id='nameIn' placeholder='Prénom' />
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <label class='sr-only' for='surnameIn'>Surame</label>
          <b-form-input v-model='infos.surname' id='surnameIn' placeholder='Nom' />
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <label class='sr-only' for='eMailIn'>e-Mail</label>
          <b-form-input v-model='infos.email' id='eMailIn' type='email' placeholder='e-Mail' />
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
    <b-button variant='primary' @click='registerParent'>Parent</b-button>
    <b-button variant='primary' @click='registerSitter'>Sitter</b-button>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      infos: {
        name: '',
        surname: '',
        email: ''
      }
    }
  },
  methods: {
    registerParent: function () {
      this.$store.commit('addParent', {...this.infos, children: []})
      this.$router.push('/register-parent/parent')
    },
    registerSitter: function () {
      this.$store.commit('addSitter', {...this.infos})
      this.$router.push('/register-sitter/sitter')
    }
  }
}
</script>
