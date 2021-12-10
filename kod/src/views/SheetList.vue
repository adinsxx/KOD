<template>
<!-- TODO: add in two lists -->
<!--  1 to list all the users sheets, 1 to list ALL the sheets-->
  <div class="sheet-list">

  </div>
</template>

<script>
import {db} from "../firebase/firebase";

export default {
  name: "SheetList",
  props: {
    authUser: Object,
    newCharacterSheet: Object,
    collection: String
  },

  data: function(){
    return {
      characters: null,
    }
  },

  firestore: {
    characters: db.collection('characters').orderBy('name')
  },

}
</script>

<style scoped>

</style>