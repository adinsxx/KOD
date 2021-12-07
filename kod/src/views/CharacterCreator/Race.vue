<template>
<div>
  <breadcrumbs></breadcrumbs>
  <user-select v-model="races">
  </user-select>
</div>
</template>

<script>


import UserSelect from "../../components/DRY-Killers/UserSelect";
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Race",
  data: () => ({
    races: [],
  }),
  components: {UserSelect, Breadcrumbs},
  props:{
    newCharacterSheet: Object,
},

}
</script>

<style scoped>

</style>