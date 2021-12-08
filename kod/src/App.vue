<template>
  <div id="app"  class="container-md">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/login">Login</router-link>-->
    <!--    </div>-->
    <router-view :authUser="authUser" :new-character-sheet="newCharacterSheet"/>


  </div>

</template>



<script>
import {auth} from "./firebase/firebase"
import CharacterSheet from "./models/CharacterSheet";
export default {
  name: 'App',
  data() {
    return {
      authUser: {uid: ''},
      newCharacterSheet: new CharacterSheet()
    }
  },

  created: function(){
    auth.onAuthStateChanged(user => {
      if(user){
        this.authUser = user
      } else {
        this.authUser = {uid: ''}
      }

    })
  }
}
</script>

<style>
#app{


}


</style>