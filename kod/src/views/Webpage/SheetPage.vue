<template>
  <div class="sheetpage">
    <sheet-list collection="user" v-if="loggedIn" :user="authUser"></sheet-list>
  </div>
</template>

<script>
import SheetList from "./SheetList";

export default {
  name: "SheetPage",
  components: {
    SheetList
  },
  props: {
    authUser: Object,
    newCharacterSheet: Object
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