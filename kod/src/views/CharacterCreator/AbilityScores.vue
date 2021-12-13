<!--WILL ALSO INCLUDE LEVELING-->
<template>
  <div class="characterForm">
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-input v-model="newCharacterSheet.abilityScores"></v-input>
      <v-btn @click="next">Next</v-btn>
    </v-form>
  </div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "AbilityScores",
  components: {Breadcrumbs},
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },

  data: () => ({
    items: [
      //TODO define pre-set stats with base values
        //i.e. str: 15, dex: 12, con: 10
    ],
  }),

  methods:{
    next(){
      this.$router.push('/character-creator/proficiencies')
    }
  }
}
</script>

<style scoped>
.characterForm
{
  margin: 30px;
}
</style>