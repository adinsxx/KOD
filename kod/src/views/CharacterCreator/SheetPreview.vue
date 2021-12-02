<template>
<div>
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

</div>
</template>

<script>
export default {
  name: "SheetPreview",
  props:{
    newCharacterSheet: Object
  }
}
</script>

<style scoped>

</style>