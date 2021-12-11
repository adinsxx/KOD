<template>
  <div class="sheetpage">
    <sheet-list collection="characters" v-if="loggedIn" :user="authUser">
    </sheet-list>
    <v-col v-else cols="9" class="mx-auto">
      <v-alert dense outlined type="error">You must be logged in to view your character sheets</v-alert>
    </v-col>
  </div>
</template>

<script>


import SheetList from "./SheetList";

export default {
  name: "SheetPage",
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },
  components:{
    SheetList
  },

  computed: {
    loggedIn(){
      return (this.authUser && this.authUser.uid);
    }
  },

}
</script>

<style scoped>

</style>