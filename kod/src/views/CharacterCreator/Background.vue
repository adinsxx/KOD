<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <v-form>
      <v-select label="Choose a Background"
      ></v-select>
      <v-textarea name="input-7-4"
      ></v-textarea>
      <v-btn @click="next">Next</v-btn>
    </v-form>

  </div>

</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";



export default {
  name: "Background",
  components: {Breadcrumbs},
  props:{
    newCharacterSheet: Object
  },
  data(){
    return {
      info: null
    }
  },

  methods:{
    next(){
      this.$router.push('/character-creator/ability-scores')
    },
    persist(){
      localStorage.items = this.items;
    }
  }
}
</script>

<style scoped>

</style>