<template>
<div>
  <breadcrumbs></breadcrumbs>
  <v-form>
    <h1>Its a sheet preview</h1>
  <v-btn>Save</v-btn>
  </v-form>


</div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "SheetPreview",
  components: {Breadcrumbs},
  props:{
    newCharacterSheet: Object
  },
  methods: {
    persist() {
      localStorage.items = this.items;
    }
  }

}
</script>

<style scoped>

</style>