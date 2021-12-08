<template>

  <v-container class="parent">
    <v-row justify="center"
           class="mb-6"
           no-gutters
    >
      <v-col
          md="3"
          offset-md="3">
        <v-btn  to="/character-creator/race" class="text-decoration-none">Build your character</v-btn>
      </v-col>
      <v-col
          md="1"
          offset-md="1">
        <v-btn v-if="authUser" class="text-decoration-none" @click.prevent="login">Login</v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LoginPage",
  props: {
    authUser: {required: true},
  },
  methods: {
    login(){
      let provider = new firebase.auth.GoogleAuthProvider();

      // login with google
      firebase.auth()
          //.signInWithEmailAndPassword(email, password)
          .signInWithPopup(provider)
          .catch(function(error) {
            // Handle Errors here.
            // let errorCode = error.code;
            let errorMessage = error.message;

            console.log(error);
            // TODO: Let the user know there was an error
            console.log('Error logging in: ', errorMessage)
          });
    },

    logout(){
      firebase.auth().signOut();
    },
  }
}
</script>

<style scoped>
.parent {
  position: center
;
}
</style>
