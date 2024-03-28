<template>
  <ContactsDb />
</template>

<script>
import ContactsDb from './components/ContactsDb.vue'

export default {
  name: 'App',
  components: {
    ContactsDb
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div {
  text-align: center;
}
</style>
