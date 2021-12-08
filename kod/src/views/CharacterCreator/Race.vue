<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <user-select v-for="race of info">
      {{race.name}}
    </user-select>

  </div>
</template>

<script>


import UserSelect from "../../components/DRY-Killers/UserSelect";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from "axios";

export default {

  name: "Race",
  data: () => ({
    info: []
  }),
  components: {UserSelect, Breadcrumbs},
  props:{
    newCharacterSheet: Object,
  },
  created() {
    axios
    .get("https://www.dnd5eapi.co/api/races")
    .then(response => (this.info = response))
  }


}
</script>

<style scoped>

</style>