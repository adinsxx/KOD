<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <v-form>
      <user-select></user-select>
      <v-btn @click="next">Next</v-btn>
    </v-form>
  </div>
</template>

<script>
import UserSelect from "../../components/DRY-Killers/UserSelect";
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "KnownSpells",
  components: {UserSelect, Breadcrumbs},
  props:{
    newCharacterSheet: Object
  },
  methods: {
    next() {
      this.$router.push('/character-creator/equipment')
    },
    persist(){
      localStorage.items = this.items;
    }
  }
}
</script>

<style scoped>

</style>