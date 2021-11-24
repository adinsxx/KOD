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
  }
}
</script>

<style scoped>

</style>