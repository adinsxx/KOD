<template>
  <div id="homepage">
    <!--    <b-navbar toggleable="sm" type="dark" variant="dark">-->
    <!--      <b-collapse id="nav-text-collapse" is-nav>-->
    <!--        <b-nav fill>-->
    <!--          <b-nav-item right to="/login" exact exact-active-class="active">User login</b-nav-item>-->
    <!--          <b-nav-item right to="/wiki" exact exact-active-class="active">Resources Hub</b-nav-item>-->
    <!--        </b-nav>-->
    <!--      </b-collapse>-->
    <!--    </b-navbar>-->
    <v-app-bar
        color="deep-purple"
        dark
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!--    https://stackoverflow.com/questions/59415526/vuetify-v-carousel-arrows-overlapping-problem-->

    <v-app>
      <v-carousel cycle height="800" hide-delimiters>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
        >
        </v-carousel-item>
      </v-carousel>
    </v-app>

    <v-img class="logo" src="@/assets/King_of_Diamonds-removebg-preview.png"/>

    <v-btn id="abutton" to="/character-creator/race" class="text-decoration-none">Build your character</v-btn>
    <v-btn id="bbutton" to="/login" class="text-decoration-none" @click="signInUser">Login</v-btn>
    <b-card-footer>
      Its a footer
    </b-card-footer>

  </div>


</template>

<style scoped>

.logo {
  position: absolute;
  bottom: 200px;
  left: 500px;
}
#homepage {
  text-align: center;
}

img {
  max-height: 100%;
  width: auto;
}

#abutton{
  position: absolute;
  bottom: 45px;
  left: 575px;
  opacity: 75%;
}

#bbutton{
  position: absolute;
  bottom: 45px;
  left: 825px;
  opacity: 75%;

}


</style>

<script>

import {auth} from "../../firebase/firebase";

export default {
  name: "HomePage",
  props: {
    authUser: Object
  },
  data: () => ({
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

  }),

  methods: {
    signInUser(){
      auth.signInWithEmailAndPassword(this.email, this.password).then(
          () => {
            this.$router.push('/')
          },
          err => {
            alert(`Error - ${err.message}`)
          }

      )
    }
  }
}
</script>