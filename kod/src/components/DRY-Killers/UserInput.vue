<template>
<div class="select">
  <v-col>
  <v-select
      :items="items"
      label="Outlined style"
      outlined
  ></v-select>
  </v-col>
</div>
</template>

<script>
export default {
  name: "UserInput",
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
