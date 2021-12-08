<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <v-app>
      <v-form>
        <v-select :items="items"
                  label="Choose a Class"
        >
        </v-select>
      </v-form>

    </v-app>
    <v-btn @click="() => {next; persist;}">Next</v-btn>

  </div>
</template>

<script>
// import axios from "axios";

import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Class",
  components: {Breadcrumbs},
  props:{
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
    persist(){
      localStorage.items = this.items;
    }
  }
}
</script>

<style scoped>

</style>