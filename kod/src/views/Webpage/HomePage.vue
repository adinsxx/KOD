<template>
  <div id="homepage">
    <img src="../../assets/King_of_Diamonds-removebg-preview.png">
    <b-container>
      <b-row>
        <b-col>
          <b-button-group>
          <b-button class="no-p-button"><router-link to="/">Build your character</router-link></b-button>
          <b-button class="p-button"><router-link to="/login">Sign in</router-link></b-button>
          </b-button-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
  #homepage {
    text-align: center;
  }

</style>

<script>
export default {
  name: "HomePage"
}
</script>

