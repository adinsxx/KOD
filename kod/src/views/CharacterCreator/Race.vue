<template>

</template>

<script>
import axios from "axios";

export default {
  name: "Race",
  data: {

  },
  props:{
    newCharacterSheet: Object
  },
  methods: {
    getRaces(){
      if(this.raceSearch){
        this.raceResults = new RaceCollection();
      }
    }
    // axios
    //     .get('https://www.dnd5eapi.co/api/race/')
    //     .then(reponse => (this.info = response.data.bpi))
  }
  //mounted: function(){}
}
</script>

<style scoped>

</style>