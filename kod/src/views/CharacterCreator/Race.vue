<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <v-app>
    <v-form>
        <v-select :items="items"
                  label="Choose a Race"
        >
        </v-select>
    </v-form>
    </v-app>
    <v-btn @click="() => {next; persist;}">Next</v-btn>

  </div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";

export default {

  name: "Race",
  data: () => ({
    items: [
      "Aarakocra",
      "Aasimar",
      "Bugbear",
      "Centaur",
      "Changeling",
      "Dhampir",
      "Dragonborn",
      "Dwarf",
      "Elf",
      "Firbolg",
      "Genasi",
      "Gith",
      "Gnome",
      "Goblin",
      "Goliath",
      "Grung",
      "Halfling",
      "Half-Elf",
      "Half-Orc",
      "Hexblood",
      "Hobgoblin",
      "Human",
      "Kalashtar",
      "Kenku",
      "Kobold",
      "Leonin",
      "Lizardfolk",
      "Locathah",
      "Loxodon",
      "Minotaur",
      "Orc",
      "Reborn",
      "Satyr",
      "Shifter",
      "Simic Hybrid",
      "Tabaxi",
      "Tiefling",
      "Tortle",
      "Triton",
      "Vedalken",
      "Verdan",
      "Warforged",
      "Yuan-Ti Pureblood",
    ],
  }),
  components: {Breadcrumbs},
  methods: {
    next() {
      this.$router.push('/character-creator/class')
    },
    persist() {
      localStorage.items = this.items;
    }
  },


}
</script>

<style scoped>

</style>