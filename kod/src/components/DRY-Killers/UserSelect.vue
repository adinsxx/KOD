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
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),

}
</script>

<style scoped>

</style>
