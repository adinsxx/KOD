<template>
<!-- TODO: add in two lists -->
<!--  1 to list all the users sheets, 1 to list ALL the sheets-->
  <div class="sheet-list">
    <sheet-preview v-if="characters" v-for="character in characters" :key="character.name" :character="character">
    </sheet-preview>
  </div>
</template>

<script>


import {db} from "../../firebase/firebase";
import SheetPreview from "../CharacterCreator/SheetPreview";
export default {
  name: "SheetList",
  props: {
    authUser: Object,
    newCharacterSheet: Object,
    collection: String
  },
  components: {
    SheetPreview
  },

  data: function(){
    return {
      characters: null,
    }
  },

  firestore: function(){
      switch (this.collection){
        case 'user':
          return {
            characters: db.collection('characters').where('user', 'array-contains', this.user.id),
          };
        default:
          return {
            characters: db.collection('characters').orderBy('name'),
          }
      }
  },

}
</script>

<style scoped>

</style>