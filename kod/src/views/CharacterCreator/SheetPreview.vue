<template>
<div class="characterForm">
  <breadcrumbs></breadcrumbs>
  <v-form>
    <p>    {{newCharacterSheet.name}}</p>
    <p>    {{newCharacterSheet.raceName}}</p>
    <p>  {{newCharacterSheet.className}}</p>
    <p>    {{newCharacterSheet.background}}</p>
    <p>    {{newCharacterSheet.abilityScores}}</p>
    <p>    {{newCharacterSheet.proficiences}}</p>
    <p>    {{newCharacterSheet.options}}</p>
    <p>    {{newCharacterSheet.spells}}</p>
    <p>    {{newCharacterSheet.equipment}}</p>
    <p>    {{newCharacterSheet.description}}</p>










<v-btn @click.prevent="addCharacter">Save</v-btn>
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