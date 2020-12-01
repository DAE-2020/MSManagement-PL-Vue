<template>
  <v-container id="Login" class="fill-height">
    <v-row justify="center" align="center">
      <v-col class="text-center" cols="12" md="12">
        <h1>Login</h1>
      </v-col>
      <v-form @submit.prevent="validateAndSubmit" class="col col-md-5 col-12">
        <v-row no-gutters justify="center">
            <v-col cols="12">
              <v-text-field solo
                            type="text"
                            label="Username"
                            v-model="login.username"
                            :error-messages="errorBagUsername"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field solo
                            type="password"
                            label="Password"
                            v-model="login.password"
                            :error-messages="errorBagPassword"
              ></v-text-field>
            </v-col>
            <v-col cols="12"><v-btn block color="secondary" type="submit">Login</v-btn></v-col>
            <v-col cols="12"><v-btn text color="primary" class="px-0 pt-2">Forgot your password?</v-btn></v-col>
        </v-row>
    </v-form>
    </v-row>
  </v-container>

</template>

<script>
  import { mapActions } from 'vuex'
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: "Login",
    data() {
      return {
        login: {
          username: null,
          password: null
        }
      }
    },
    validations: {
      login: {
        username: {required},
        password: {required}
      }
    },
    computed: {
      errorBagUsername() {
        let bag = []
        if (!this.$v.login.username.$dirty) {
          return []
        }
        if (!this.$v.login.username.required) {
          bag.push('Username required!')
        }
        return bag;
      },
      errorBagPassword() {
        let bag = []
        if (!this.$v.login.password.$dirty) {
          return []
        }
        if (!this.$v.login.password.required) {
          bag.push('Password required!')
        }
        return bag;
      }
    },
    methods: {
      ...mapActions([
        'refreshSession'
      ]),
      validateAndSubmit () {
        this.$v.login.$touch()
        if (!this.$v.login.$invalid) {
          this.refreshSession(this.login).then(() => {
            this.$router.replace({name: 'Home'})
          })
        }
      }
    },
  }
</script>

<style scoped>

</style>
