<template>
 <div>
   <input v-model="newCharacterSheet.className">
   <breadcrumbs></breadcrumbs>
   <user-select></user-select>

 </div>
</template>

<script>
// import axios from "axios";

import axios from "axios";
import UserSelect from "../../components/DRY-Killers/UserSelect";
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Class",
  components: {UserSelect, Breadcrumbs},
  props:{
    newCharacterSheet: Object
  },
  mounted(){
    axios
        .get('https://www.dnd5eapi.co/api/class/')
        .then(response => (this.info = response.data.bpi))
  },
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style scoped>

</style>