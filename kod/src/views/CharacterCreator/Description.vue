<template>
  <div></div>

</template>

<script>
import axios from "axios";

export default {
  name: "Description",
  props:{
    newCharacterSheet: Object
  },
  mounted(){
    axios
        .get('https://www.dnd5eapi.co/api/ability-scores/')
        .then(response => (this.info = response.data.bpi))
  }
}
</script>

<style scoped>

</style>