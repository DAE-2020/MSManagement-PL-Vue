<template>
  <v-app>
    <app-bar></app-bar>
    <v-navigation-drawer app clipped dark :value="drawer">
      <template v-if="accessToken">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{firstName}}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-btn text x-small @click="logout"><v-icon left>mdi-logout</v-icon> Logout</v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link></v-list-item>
      </template>
      <v-list-item v-else>
        <v-list-item-avatar>
          <v-img src="./assets/logo.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            MSManagement
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-btn text x-small :to="{ name: 'Login' }"><v-icon left>mdi-login</v-icon> Login</v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense
              nav
      >
        <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import AppBar from "./components/AppBar";

  export default {
    name: 'App',
    components: {
      AppBar
    },
    created() {
    },
    data: () => ({
      items: [],
      firstName: 'User'
    }),
    computed: {
      ...mapGetters({
        drawer: 'getDrawerState',
        accessToken: "getAccessToken"
      })
    },
    methods: {
      ...mapActions([
        'deleteSession'
      ]),
      logout () {
        this.deleteSession()
      }
    },
  }
</script>
