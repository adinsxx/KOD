<template>
  <div class="characterForm">
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-select v-model="newCharacterSheet.spells" :items="items" label="Choose a spell"></v-select>
      <v-btn @click="next">Next</v-btn>
    </v-form>
  </div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "KnownSpells",
  components: {Breadcrumbs},
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },
  methods: {
    next() {
      this.$router.push('/character-creator/equipment')
    }
  },
  data: () => ({
    //TODO add equipment data
    items: ['None', 'Spare the Dying', 'Firebolt', 'Shocking Grasp', 'Magic Missile', 'Turn Undead'],
  }),
}
</script>

<style scoped>
.characterForm {
  margin: 30px;
}
</style>