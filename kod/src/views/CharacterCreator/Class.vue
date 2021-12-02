<template>
 <div>
   <input v-model="newCharacterSheet.className">
 </div>
</template>

<script>
// import axios from "axios";

import axios from "axios";

export default {
  name: "Class",
  props:{
    newCharacterSheet: Object
  },
  mounted(){
    axios
        .get('https://www.dnd5eapi.co/api/class/')
        .then(response => (this.info = response.data.bpi))
  }
}
</script>

<style scoped>

</style>