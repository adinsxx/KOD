<template>
  <div class="characterForm">
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-textarea name="input-7-4" v-model="newCharacterSheet.proficiences" label="Write a proficiency. ex: Athletics, Arcana, Stealth, etc."></v-textarea>
      <v-btn @click="next">Next</v-btn>
    </v-form>
  </div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Proficiencies",
  components: {Breadcrumbs},
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },
  methods: {
    next() {
      this.$router.push('/character-creator/options')
    },
  },
}
</script>

<style scoped>
.characterForm {
  margin: 30px;
}
</style>