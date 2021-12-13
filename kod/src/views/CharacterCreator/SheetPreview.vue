<template>
  <div class="characterForm">
    <breadcrumbs></breadcrumbs>
    <v-form>
      <p>  Name:  {{newCharacterSheet.name}}</p>
      <p>   Race: {{newCharacterSheet.raceName}}</p>
      <p>  Class: {{newCharacterSheet.className}}</p>
      <p>    Background: {{newCharacterSheet.background}}</p>
      <p>    Ability Scores: {{newCharacterSheet.abilityScores}}</p>
      <p>    Proficiencies: {{newCharacterSheet.proficiences}}</p>
      <p>    Options: {{newCharacterSheet.options}}</p>
      <p>    Spells: {{newCharacterSheet.spells}}</p>
      <p>    Equipment: {{newCharacterSheet.equipment}}</p>
      <p>    Description: {{newCharacterSheet.description}}</p>

      <v-btn @click.prevent="addCharacter">Save</v-btn>
      <v-btn @click.prevent="toSheets">My Sheets</v-btn>
    </v-form>


  </div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";
import {db} from "../../firebase/firebase";
import CharacterSheet from "../../models/CharacterSheet";

export default {
  name: "SheetPreview",
  data() {
    return {
      Characters: []
    }
  },
  components: {Breadcrumbs},
  props: {
    authUser: Object,
    newCharacterSheet: Object,
  },
  methods: {
    addCharacter(){
      let theCharacter = this.newCharacterSheet;

      theCharacter.user = (this.authUser);
      console.log(theCharacter.toFirestore())
      console.log(this.authUser)
      db.collection('characters')
          .add(theCharacter.toFirestore())
          .then(function (docRef) {
            console.log("Sheet added: ", docRef);

            theCharacter = new CharacterSheet();
          })
          .catch(function(error) {
            console.error("Error adding sheet: ", error)
          });

    },
    toSheets(){
      this.$router.push('/sheet-pages')
    }
  }

}
</script>

<style scoped>
.characterForm
{
  margin: 30px;
}
</style>