<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/login">Login</router-link>-->
    <!--    </div>-->
    <router-view :new-character-sheet="newCharacterSheet"/>

  </div>

</template>


<script>
import CharacterSheet from "./models/CharacterSheet";
export default {
  name: 'App',
  data() {
    return {
      newCharacterSheet: new CharacterSheet()
    }
  }
}
</script>