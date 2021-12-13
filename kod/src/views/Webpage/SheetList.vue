<template>
  <div>
    <h2>My Sheets</h2>
    <v-row class="sheet-list" v-if="characters">
      <v-card cols="12" sm="3" md="4" class="mx-0" v-for="character in characters" :key="character.id" :character="character">
        <ul>Name: {{character.name}}</ul>
        <ul>Race: {{character.raceName}} | Class: {{character.className}}</ul>
        <ul>Background: {{character.background}}</ul>
        <ul>Ability Scores: {{character.abilityScores}}</ul>
        <ul>Proficiencies: {{character.proficiences}}</ul>
        <ul>Options: {{character.options}}</ul>
        <ul>Spells: {{character.spells}} </ul>
        <ul>Equipment: {{character.equipment}}</ul>
        <ul>Description: {{character.description}}</ul>
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

</style>