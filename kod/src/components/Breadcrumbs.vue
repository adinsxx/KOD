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
          to: '#'
        },
        {
          text: 'Class',
          to: '#'
        },
        {
          text: 'Background',
          to: '#'
        },
        {
          text: 'Level & Ability Scores',
          to: '#'
        },
        {
          text: 'Proficiencies',
          to: '#'
        },
        {
          text: 'Options',
          to: '#'
        },
        {
          text: 'Hit points',
          to: '#'
        },
        {
          text: 'Known Spells',
          to: '#'
        },
        {
          text: 'Equipment',
          to: '#'
        },
        {
          text: 'Description',
          to: '#'
        },
        {
          text: 'Sheet Preview',
          to: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>