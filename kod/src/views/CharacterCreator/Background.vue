<template>
  <div class="characterForm">
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-select v-model="newCharacterSheet.background" :items="items" label="Choose a Background"
      ></v-select>
      <v-btn @click="next">Next</v-btn>
    </v-form>

  </div>

</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";



export default {
  name: "Background",
  components: {Breadcrumbs},
  props: {
    authUser: Object,
    newCharacterSheet: Object
  },
  data(){
    return {
      info: null,
      items: ['Criminal', 'Acolyte ', 'Entertainer', 'Knight', 'Soldier', 'Pirate']
    }
  },

  methods:{
    next(){
      this.$router.push('/character-creator/ability-scores')
    },

  }
}
</script>

<style scoped>
.characterForm{

}

</style>