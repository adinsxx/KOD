<template>
<!-- TODO: add in two lists -->
<!--  1 to list all the users sheets, 1 to list ALL the sheets-->
  <div class="sheet-list" v-if="characters">
    <v-card  v-for="character in characters" :key="character.id" :character="character">
      {{characters}}
    </v-card>
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