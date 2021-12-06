<template>
<div class="list">
  <div>
    <v-col>
    <v-text-field
        label="Main input"
        :rules="rules"
        hide-details="auto"
    ></v-text-field>
    <v-text-field label="Another input"></v-text-field>
    </v-col>
  </div>
</div>
</template>

<script>
export default {
  name: "UserSelect",
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
}
</script>

<style scoped>

</style>
