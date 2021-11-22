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
          href: '#'
        },
        {
          text: 'Class',
          href: '#'
        },
        {
          text: 'Background',
          href: '#'
        },
        {
          text: 'Level & Ability Scores',
          href: '#'
        },
        {
          text: 'Proficiencies',
          href: '#'
        },
        {
          text: 'Options',
          href: '#'
        },
        {
          text: 'Hit points',
          href: '#'
        },
        {
          text: 'Known Spells',
          href: '#'
        },
        {
          text: 'Equipment',
          href: '#'
        },
        {
          text: 'Description',
          href: '#'
        },
        {
          text: 'Sheet Preview',
          href: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>