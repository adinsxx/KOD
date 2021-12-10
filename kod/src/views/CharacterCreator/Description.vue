<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-textarea v-model="newCharacterSheet.description"></v-textarea>
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

</style>