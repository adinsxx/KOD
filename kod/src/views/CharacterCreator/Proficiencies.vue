<template>

</template>

<script>
import axios from "axios";

export default {
  name: "Proficiencies",
  props:{
    newCharacterSheet: Object
  },
  mounted(){
    axios
        .get('https://www.dnd5eapi.co/api/proficiencies/')
        .then(reponse => (this.info = response.data.bpi))
  }
}
</script>

<style scoped>

</style>