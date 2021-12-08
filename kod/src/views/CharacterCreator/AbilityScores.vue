<!--WILL ALSO INCLUDE LEVELING-->
<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <v-form>
    <user-input></user-input>
      <v-btn @click="next">Next</v-btn>
    </v-form>
  </div>
</template>

<script>
import UserInput from "../../components/DRY-Killers/UserInput";
import Breadcrumbs from "../../components/Breadcrumbs";

export default {
  name: "AbilityScores",
  components: {UserInput, Breadcrumbs},
  props: {
    newCharacterSheet: Object
  },

  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),

  methods:{
    next(){
      this.$router.push('/character-creator/proficiencies')
    }
  }
}
</script>

<style scoped>

</style>