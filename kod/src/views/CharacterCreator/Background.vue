<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <user-input></user-input>
    <user-select></user-select>

  </div>

</template>

<script>
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs";
import UserInput from "../../components/DRY-Killers/UserSelect";
import UserSelect from "../../components/DRY-Killers/UserInput";


export default {
  name: "Background",
  components: {UserSelect, UserInput, Breadcrumbs},
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
        .then(response => (this.info = response.data.bpi))
  }
}
</script>

<style scoped>

</style>