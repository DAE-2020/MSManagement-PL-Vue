<template>
  <v-app>
    <app-bar></app-bar>
    <v-navigation-drawer app clipped dark :value="drawer">
      <template v-if="accessToken">
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="// noinspection HtmlUnknownTarget user.avatar"
                   lazy-src="./assets/logo.png"
                   :alt="user.name"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{user.name}}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-btn text x-small @click="logout"><v-icon left>mdi-logout</v-icon> Logout</v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <template v-for="(permission, key) in user.permissions">
          <v-list-item link :key="key" v-if="permission !== PERMISSIONS.NO_PERMISSONS">
            {{ $_.upperFirst(key) }}
          </v-list-item>
        </template>

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

  const PERMISSIONS = {
    NO_PERMISSONS: 0,
    READ: 1,
    CREATE_UPDATE: 2,
    CREATE_READ_UPDATE: 3,
    DELETE: 4,
    READ_DELETE: 5,
    CREATE_UPDATE_DELETE: 6,
    CREATE_READ_UPDATE_DELETE: 7
  }

  export default {
    name: 'App',
    components: {
      AppBar
    },
    created() {
      if (this.accessToken) {
        this.fetchUserData().then(data => {
          this.user = data
          this.fetchUserPermissions().then(data => {
            this.$set(this.user, 'permissions', data)
          })
        })
      }
    },
    data: () => ({
      items: [],
      user: {avatar: null, name: null},
      PERMISSIONS
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
      ...mapActions('user', [
        'fetchUserData',
        'fetchUserPermissions'
      ]),
      logout () {
        this.deleteSession()
      }
    },
  }
</script>
