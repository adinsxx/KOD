<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-select v-model="newCharacterSheet.spells"></v-select>
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
    },

  }
}
</script>

<style scoped>

</style>