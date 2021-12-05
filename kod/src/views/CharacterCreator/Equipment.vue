<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <user-select></user-select>

  </div>

</template>

<script>
import axios from "axios";

import Breadcrumbs from "../../components/Breadcrumbs";
import UserSelect from "../../components/DRY-Killers/UserSelect";

export default {
  name: "Equipment",
  components: {UserSelect, Breadcrumbs},
  props:{
    newCharacterSheet: Object
  },
  mounted(){
    axios
        .get('https://www.dnd5eapi.co/api/equipment-categories/')
        .then(response => (this.info = response.data.bpi))
  },
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style scoped>

</style>