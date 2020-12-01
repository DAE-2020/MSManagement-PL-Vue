<template>
  <v-app-bar
      app
      clipped-left
      color="primary"
      dark
  >
    <v-app-bar-nav-icon @click="toggleDrawerState"></v-app-bar-nav-icon>
    <div class="d-flex align-center">
      <v-img
          @click="() => { $router.push({ name: 'Home' })}"
          alt="MSManagement Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.jpg"
          width="40"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn :to="{ name: action.route}"
           text
           v-if="action && action.title"
    >
      <v-icon left>add</v-icon>
      <span class="mr-2">{{ action.title }}</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'AppBar',
    props: {
      action: {
        type: Object,
        required: false,
        validator: (value) => {
          // eslint-disable-next-line no-prototype-builtins
          return (value.hasOwnProperty('title') !== undefined && value.hasOwnProperty('route') !== undefined) ||
            // eslint-disable-next-line no-prototype-builtins
            (value.hasOwnProperty('title') === undefined && value.hasOwnProperty('route') === undefined)
        }
      }
    },
    methods: {
      ...mapActions([
        'toggleDrawerState'
      ])
    },
  }
</script>

<style scoped>

</style>
