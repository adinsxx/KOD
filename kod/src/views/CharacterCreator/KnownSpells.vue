<template>
<div>
  <breadcrumbs></breadcrumbs>
  <user-select></user-select>
</div>
</template>

<script>
import axios from "axios";
import UserSelect from "../../components/DRY-Killers/UserSelect";
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "KnownSpells",
  components: {UserSelect, Breadcrumbs},
  props:{
    newCharacterSheet: Object
  },
  mounted(){
    axios
        .get('https://www.dnd5eapi.co/api/spells/')
        .then(response => (this.info = response.data.bpi))
  },
}
</script>

<style scoped>

</style>