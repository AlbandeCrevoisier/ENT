<template>
  <div>
    <h3>S'enregistrer</h3>
    <b-form @submit='sub'>
      <b-container>
        <b-form-row>
          <b-col>
            <label class='sr-only' for='nameIn'>Name</label>
            <b-form-input id='nameIn'
                          placeholder='Prénom'
                          v-model='infos.name'
                          required />
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col>
            <label class='sr-only' for='surnameIn'>Surame</label>
            <b-form-input id='surnameIn'
                          placeholder='Nom'
                          v-model='infos.surname'
                          required />
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col>
            <label class='sr-only' for='eMailIn'>e-Mail</label>
            <b-form-input id='eMailIn'
                          type='email'
                          placeholder='e-Mail'
                          v-model='infos.email'
                          required />
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
        <b-form-row>
          <b-col>
            <label class='sr-only' for='posPick'>Parent or Sitter</label>
            <b-form-radio-group id='posPick'
                                buttons
                                v-model='infos.pos'
                                name='posPick'>
              <b-form-radio value='p'>parent</b-form-radio>
              <b-form-radio value='s'>sitter</b-form-radio>
            </b-form-radio-group>
          </b-col>
        </b-form-row>
      </b-container>
      <b-button type='submit' variant='primary'>Suivant</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      infos: {
        name: '',
        surname: '',
        email: '',
        pos: ''
      }
    }
  },
  methods: {
    sub () {
      if (this.infos.pos === 'p') {
        this.$store.commit('addParent', {...this.infos, children: []})
        this.$router.push('/register-parent/' + this.$store.getters.pIdx)
      } else {
        this.$store.commit('addSitter', {...this.infos})
        this.$router.push('/register-sitter/' + this.$store.getters.sIdx)
      }
    }
  }
}
</script>
