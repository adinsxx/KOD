<template>

</template>

<script>
import axios from "axios";

export default {
  name: "Background",
  props:{
    newCharacterSheet: Object
  },
  data(){
    return {
      info: null
    }
  },
  mounted(){
    axios
        .get('https://www.dnd5eapi.co/api/background/')
        .then(reponse => (this.info = response.data.bpi))
  }
}
</script>

<style scoped>

</style>