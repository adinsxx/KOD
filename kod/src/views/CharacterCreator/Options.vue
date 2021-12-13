<template>
  <div class="characterForm">
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-select v-model="newCharacterSheet.options" label="Choose a Pack"  :items="items"></v-select>
      <v-btn @click="next">Next</v-btn>
    </v-form>
  </div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Options",
  components: {Breadcrumbs},
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },
  methods: {
    next() {
      this.$router.push('/character-creator/spells')
    },
  },
  data: () => ({
    //TODO add equipment data
    items: ['Adventurers Pack', 'Explorers Pack', 'Scholars Pack'],
  }),

}
</script>

<style scoped>
.characterForm {
  margin: 30px;
}
</style>