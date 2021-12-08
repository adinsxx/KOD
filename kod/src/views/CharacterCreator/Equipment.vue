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

import Breadcrumbs from "../../components/Breadcrumbs";
import UserSelect from "../../components/DRY-Killers/UserSelect";

export default {
  name: "Equipment",
  components: {UserSelect, Breadcrumbs},
  props:{
    newCharacterSheet: Object
  },
  methods: {
    next() {
      this.$router.push('/character-creator/description')
    },
    persist(){
      localStorage.items = this.items;
    }
  },
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style scoped>

</style>