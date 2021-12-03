<template>
<breadcrumbs></breadcrumbs>
</template>

<script>
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Background",
  components: {Breadcrumbs},
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