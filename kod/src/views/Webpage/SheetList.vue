<template>
  <div>


    <v-app-bar
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>My Sheets</v-toolbar-title>
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
              <v-icon>mdi-file</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/sheet-pages" class="text-decoration-none">
                My Sheets
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-row class="sheet-list" v-if="characters">
      <v-card class="pa-md-4 mx-lg-auto" width="500px" v-for="character in characters" :key="character.id" :character="character">
        <p>Name: {{character.name}}</p>
        <p>Race: {{character.raceName}}</p>
        <p>Class: {{character.className}}</p>
        <p>Background: {{character.background}}</p>
        <p>Ability Scores: {{character.abilityScores}}</p>
        <p>Proficiencies: {{character.proficiences}}</p>
        <p>Options: {{character.options}}</p>
        <p>Spells: {{character.spells}} </p>
        <p>Equipment: {{character.equipment}}</p>
        <p>Description: {{character.description}}</p>

      </v-card>
    </v-row>
  </div>
</template>

<script>



import {db} from "../../firebase/firebase";

export default {
  name: "SheetList",
  props: {
    user: Object,
    newCharacterSheet: Object,
    collection: String
  },


  data(){
    return {
      characters: [],
      drawer: false,
      group: null,
    }
  },

  firestore() {
    return{
      characters: db.collection('characters').where('user.uid', '==', this.user.uid)
    };
  },

}
</script>

<style scoped>
  .sheet-list{
    margin-top: 100px;
  }
</style>