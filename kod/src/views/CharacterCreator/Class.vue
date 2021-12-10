<template>
  <div>
    <breadcrumbs></breadcrumbs>

      <v-form>
        <v-select v-model="newCharacterSheet.className" :items="items"
                  label="Choose a Class"
        >
        </v-select>
        <v-btn @click="() => {next();}">Next</v-btn>

      </v-form>


  </div>
</template>

<script>
// import axios from "axios";

import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Class",
  components: {Breadcrumbs},
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },
  data: () => ({
    items: [
      "Artificer",
      "Barbarian",
      "Bard",
      "Blood Hunter",
      "Cleric",
      "Druid",
      "Fighter",
      "Monk",
      "Mystic",
      "Paladin",
      "Ranger",
      "Rogue",
      "Sorcerer",
      "Warlock",
      "Wizard",
    ],
  }),
  methods:{
    next(){
      this.$router.push('/character-creator/background')
    },
  }
}
</script>

<style scoped>

</style>