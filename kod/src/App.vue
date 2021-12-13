<template>
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/login">Login</router-link>-->
    <!--    </div>-->
    <v-app>
      <router-view :authUser="authUser" :new-character-sheet="newCharacterSheet"/>
      <!--    <b-navbar toggleable="sm" type="dark" variant="dark">-->
      <!--      <b-collapse id="nav-text-collapse" is-nav>-->
      <!--        <b-nav fill>-->
      <!--          <b-nav-item right to="/login" exact exact-active-class="active">User login</b-nav-item>-->
      <!--          <b-nav-item right to="/wiki" exact exact-active-class="active">Resources Hub</b-nav-item>-->
      <!--        </b-nav>-->
      <!--      </b-collapse>-->
      <!--    </b-navbar>-->


    </v-app>


</template>



<script>
import CharacterSheet from "./models/CharacterSheet";
import firebase from "firebase";
import router from "./router";
import {User} from "./models/User";

export default {
  name: 'App',
  router: router,
  data() {
    return {
      authUser: null,
      newCharacterSheet: new CharacterSheet(),
    }
  },
  created: function() {
    // TODO: onAuthStateChanged()
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        // let emailVerified = user.emailVerified;
        // let photoURL = user.photoURL;
        // let isAnonymous = user.isAnonymous;
        // let uid = user.uid;
        // let providerData = user.providerData;

        console.log('Signed in as: ', user);

        //store entire user object in our app
        // this.authUser = user;
        this.authUser = new User(user);

        document.getElementById('message').innerHTML = 'Signed in as: ' + displayName + ' (' + email + ')';

      } else {
        // User is signed out.
        console.log('Not signed in.');

        //remove user from the app
        this.authUser = null;
      }
    });
  }

}
</script>

<style>



</style>