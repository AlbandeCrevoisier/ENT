<template>
  <div id="app">
    <b-container>
      <b-row class='justify-content-md-center'>
        <b-navbar toggleable='md' variant='light'>
          <b-navbar-brand to='/'>
            <b-img block left width='87' height='75' :src="require('./assets/logo.png')" alt='Logo' />
          </b-navbar-brand>
          <b-nav-text class='ml-auto'>
            <h1>Handy-Sitter</h1>
            <h2>Garde d'enfants handicapés</h2>
          </b-nav-text>
        </b-navbar>
      </b-row>
      <b-row class='justify-content-md-center'>
        <router-view></router-view>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
