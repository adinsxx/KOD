<template>
<div class="list">
  <div>
    <v-text-field
        label="Main input"
        :rules="rules"
        hide-details="auto"
    ></v-text-field>
    <v-text-field label="Another input"></v-text-field>
  </div>
</div>
</template>

<script>
export default {
  name: "UserSelect"
}
</script>

<style scoped>

</style>
