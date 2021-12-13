<template>
  <div class="characterForm">
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-select v-model="newCharacterSheet.equipment" :items="items" label="Choose your weapon"></v-select>
      <v-btn @click="next">Next</v-btn>
    </v-form>

  </div>

</template>

<script>

import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Equipment",
  components: {Breadcrumbs},
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },
  methods: {
    next() {
      this.$router.push('/character-creator/description')
    },
  },
  data: () => ({
    //TODO add equipment data
    items: ['Club', 'Mace', 'Axe', 'Sword', 'Bow', 'Unarmed'],
  }),
}
</script>

<style>
.characterForm {
  margin: 30px;
}

</style>