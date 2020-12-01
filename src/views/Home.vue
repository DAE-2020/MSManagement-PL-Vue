<template>
  <v-container id="home" class="fill-height">
    <v-row justify="center" align="center">
      <v-col class="text-center" cols="12">
        <h1>Welcome</h1>
      </v-col>
      <v-img src="../assets/logo-with-text-welcome.png"
             contain
             :max-width="$vuetify.breakpoint.smAndDown ? '100vw' : '500'"/>
    </v-row>

  </v-container>
</template>

<script>
  import AppBar from '../components/AppBar'

export default {
  name: 'Home',
  components: {
    AppBar
  }
}
</script>
