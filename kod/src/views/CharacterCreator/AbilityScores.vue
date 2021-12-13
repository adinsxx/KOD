<!--WILL ALSO INCLUDE LEVELING-->
<template>
  <div class="characterForm">
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-select v-model="newCharacterSheet.abilityScores"  :items="items" label="Choose Your Ability Scores"></v-select>
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
      "str: 15, dex: 15, con: 15, int: 8 wis: 8 cha: 8",
      "str: 15, dex: 15, con: 14, int: 10, wis: 8, cha: 8",
      "str: 15, dex: 15, con: 14, int: 9, wis: 9, cha: 8",
      "str: 14, dex: 14, con: 12, int: 11, wis: 11, cha: 11",
      "str: 14, dex: 13, con: 13, int: 13, wis: 13, cha: 8",
      "str: 14, dex: 13, con: 13, int: 13, wis: 12, cha: 9",
      "str: 14, dex: 13, con: 13, int: 13, wis: 11, cha: 10",
      "str: 14, dex: 13, con: 13, int: 12, wis: 12, cha: 10",
      "str: 14, dex: 13, con: 13, int: 12, wis: 11, cha: 11",
      "str: 14, dex: 13, con: 12, int: 12, wis: 12, cha: 11",
      "str: 14, dex: 12, con: 12, int: 12, wis: 12, cha: 12",
      "str: 13, dex: 13, con: 13, int: 13, wis: 13, cha: 10",
      "str: 13, dex: 13, con: 13, int: 13, wis: 12, cha: 11",
      "str: 13, dex: 13, con: 13, int: 12, wis: 12, cha: 12",
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