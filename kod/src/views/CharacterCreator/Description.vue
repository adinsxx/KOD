<template>
  <div class="characterForm">
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-text-field v-model="newCharacterSheet.name" label="Name your character"></v-text-field>
      <v-textarea v-model="newCharacterSheet.description" label="Give your character some fun details"></v-textarea>
      <v-btn @click="next">Next</v-btn>
    </v-form>
  </div>

</template>

<script>

import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Description",
  components: {Breadcrumbs},
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },
  methods: {
    next() {
      this.$router.push('/character-creator/sheet-preview')
    },
  }
}
</script>

<style scoped>
.characterForm {
  margin: 30px;
}
</style>