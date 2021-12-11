<template>
  <div>
    <v-app-bar
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>King Of Diamonds</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/" class="text-decoration-none">
                Home
              </router-link>
            </v-list-item-title>

          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/profile" class="text-decoration-none">
                Profile
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/sheet-pages" class="text-decoration-none">
                Character Inspiration
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>



    <!--    https://stackoverflow.com/questions/59415526/vuetify-v-carousel-arrows-overlapping-problem-->

    <!--    Carousel-->

    <v-carousel cycle height="600" hide-delimiters>
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      >
      </v-carousel-item>

    </v-carousel>
    <!--  buttons-->
    <login-page :auth-user="authUser"></login-page>

  </div>
</template>

<script>

import LoginPage from "./LoginPage";

export default {
  name: "HomePage",
  components: {LoginPage},
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },
  data () {
    return {
      characters: [],
      slide: 0,
      sliding: null,
      drawer: false,
      group: null,
      items: [
        {
          src: 'https://cdnb.artstation.com/p/assets/images/images/013/521/391/4k/emmanuel-shiu-human-relm-002.jpg?1539970395'
        },
        {
          src: 'https://cdna.artstation.com/p/assets/images/images/001/206/348/4k/david-edwards-kenden-001.jpg?1442195813'
        },
        {
          src: 'https://cdna.artstation.com/p/assets/images/images/002/352/926/4k/zsolt-kuczora-landscape-redesign-from-2013.jpg?1460651959'
        }


      ],
      email: '',
      password: '',
      absolute: true,
      opacity: 0,
      overlay: true,
    }
  },
}
</script>

<style scoped>

</style>