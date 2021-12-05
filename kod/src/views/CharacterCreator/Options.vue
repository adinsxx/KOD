<template>
<div>
<breadcrumbs></breadcrumbs>
<user-input></user-input>
</div>
</template>

<script>
import axios from "axios";
import UserInput from "../../components/DRY-Killers/UserInput";
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Options",
  components: {UserInput, Breadcrumbs},
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