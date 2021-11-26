<!--WILL ALSO INCLUDE LEVELING-->
<template>

</template>

<script>
import axios from "axios";

export default {
  name: "AbilityScores",
  props:{
    newCharacterSheet: Object
  },
  mounted(){
    axios
      .get('https://www.dnd5eapi.co/api/ability-scores/')
        .then(reponse => (this.info = response.data.bpi))
  }
}
</script>

<style scoped>

</style>