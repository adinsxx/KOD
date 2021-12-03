<template>
<div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "KnownSpells",
  props:{
    newCharacterSheet: Object
  },
  mounted(){
    axios
        .get('https://www.dnd5eapi.co/api/spells/')
        .then(response => (this.info = response.data.bpi))
  }
}
</script>

<style scoped>

</style>