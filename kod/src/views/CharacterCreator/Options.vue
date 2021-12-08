<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <v-form>
      <user-input></user-input>
      <v-btn @click="next">Next</v-btn>
    </v-form>
  </div>
</template>

<script>
import UserInput from "../../components/DRY-Killers/UserInput";
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "Options",
  components: {UserInput, Breadcrumbs},
  props:{
    newCharacterSheet: Object
  },
  methods: {
    next() {
      this.$router.push('/character-creator/spells')
    },
    persist(){
      localStorage.items = this.items;
    }
  },

}
</script>

<style scoped>

</style>