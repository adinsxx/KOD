<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view :new-character-sheet="newCharacterSheet"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
}

/*top right bottom left*/
#nav {
  padding: 30px 30px 0px ;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
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
<!--every page needs prop of newCharacterSheet-->