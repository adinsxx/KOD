<template>
  <div id="homepage">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right><router-link to="/login" class="text-decoration-none">User login</router-link></b-nav-item>
          <b-nav-item right><router-link to="/wiki" class="text-decoration-none">Resources Hub</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <img src="../../assets/King_of_Diamonds-removebg-preview.png">
    <h4>Jump right in</h4>
    <b-container>
      <b-row>
        <b-col>
          <b-button-group>
          <b-button><router-link to="/character-creator/race" class="text-decoration-none">Build your character</router-link></b-button>
          </b-button-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
  #homepage {
    text-align: center;
  }
  img {
    margin-bottom: 0px;
  }


</style>

<script>
export default {
  name: "HomePage"
}
</script>

