<template>
<div>
  <breadcrumbs></breadcrumbs>
  <v-form>
  {{newCharacterSheet.name}}
    {{newCharacterSheet.raceName}}
    {{newCharacterSheet.background}}
    {{newCharacterSheet.abilityScores}}
    {{newCharacterSheet.proficiences}}
    {{newCharacterSheet.options}}
    {{newCharacterSheet.spells}}
    {{newCharacterSheet.equipment}}
  <v-btn>Save</v-btn>
  </v-form>


</div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";
import {db} from "../../firebase/firebase";

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
    newCharacterSheet: Object
  },
  created(){
    db.collection('Characters').onSnapshot(()=> {
      this.Characters.push({

      })
    })
  }

}
</script>

<style scoped>

</style>