<template>
<div>
  <breadcrumbs></breadcrumbs>
  <input v-model="newCharacterSheet.name">
  <input v-model="newCharacterSheet.className">
  <input v-model="newCharacterSheet.className">
  <input v-model="newCharacterSheet.className">
  <input v-model="newCharacterSheet.className">
  <input v-model="newCharacterSheet.className">
  <input v-model="newCharacterSheet.className">
  <input v-model="newCharacterSheet.className">
  <input v-model="newCharacterSheet.className">
  <input v-model="newCharacterSheet.className">
  <h1>Its a sheet preview</h1>
</div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "SheetPreview",
  components: {Breadcrumbs},
  props:{
    newCharacterSheet: Object
  }
}
</script>

<style scoped>

</style>