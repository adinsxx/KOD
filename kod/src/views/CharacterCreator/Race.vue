<template>
<div>
  <breadcrumbs></breadcrumbs>
  <user-select></user-select>
</div>
</template>

<script>


import UserSelect from "../../components/DRY-Killers/UserSelect";
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Race",
  components: {UserSelect, Breadcrumbs},
  props:{
    newCharacterSheet: Object
  },
  methods: {
    getRaces(){
      if(this.raceSearch){
        this.raceResults = new RaceCollection();
      }
    },
    axios:get('https://www.dnd5eapi.co/api/race/')
        .then(response => (this.info = response.data.bpi))
  },
  mounted: function(){},
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style scoped>

</style>