<template>
<div>
  <breadcrumbs></breadcrumbs>
  <user-select
               :items="RaceData"
               item-text="name"
               item-value="Races"

  ></user-select>
</div>
</template>

<script>


import UserSelect from "../../components/DRY-Killers/UserSelect";
import Breadcrumbs from "../../components/Breadcrumbs";
import RaceData from "../../assets/JSON/races.json"

export default {

  name: "Race",
  data: () => ({
    RaceData: RaceData,
    race: '',
    subRace: '',
  }),
  components: {UserSelect, Breadcrumbs},
  props:{
    newCharacterSheet: Object,
},

}
</script>

<style scoped>

</style>