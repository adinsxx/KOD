<!--Breadcrumb for different pages of character sheet-->
<!--User should be able to click on the breadcrumbs to return to the crumb clicked-->
<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data(){
    return {
      items: [
        {
          text: 'Race',
          to: {name: 'Race'}
        },
        {
          text: 'Class',
          to: {name: 'Class'}
        },
        {
          text: 'Background',
          to: {name: 'Background'}
        },
        {
          text: 'Level & Ability Scores',
          to: {name: 'AbilityScores'}
        },
        {
          text: 'Proficiencies',
          to: {name: 'Proficiencies'}
        },
        {
          text: 'Options',
          to: {name: 'Options'}
        },
        {
          text: 'Known Spells',
          to: {name: 'Spells'}
        },
        {
          text: 'Equipment',
          to: {name: 'Equipment'}
        },
        {
          text: 'Description',
          to: {name: 'Description'}
        },
        {
          text: 'Sheet Preview',
          to: {name: 'SheetPreview'}

        }
      ]
    }
  }
}
</script>

<style scoped>

</style>