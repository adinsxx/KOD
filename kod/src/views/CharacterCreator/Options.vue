<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-textarea v-model="newCharacterSheet.options"></v-textarea>
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

}
</script>

<style scoped>

</style>