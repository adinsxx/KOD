<template>

</template>

<script>
import axios from "axios";

export default {
  name: "Equipment",
  props:{
    newCharacterSheet: Object
  },
  mounted(){
    axios
        .get('https://www.dnd5eapi.co/api/equipment-categories/')
        .then(reponse => (this.info = response.data.bpi))
  }
}
</script>

<style scoped>

</style>