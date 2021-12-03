<template>
  <div id="homepage">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-collapse id="nav-text-collapse" is-nav>
        <b-nav fill>
          <b-nav-item right to="/login" exact exact-active-class="active">User login</b-nav-item>
          <b-nav-item right to="/wiki" exact exact-active-class="active">Resources Hub</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
<router-link to="/character-creator/race" class="text-decoration-none">Build your character</router-link>

    <b-card-footer>
      Its a footer
    </b-card-footer>
  </div>




</template>

<style scoped>

.logo {
  position: absolute;
  top: 50px;
  width: 96.66666666666666%;

}

  #homepage {
    text-align: center;

  }
  img {
    max-height: 100%;
    width: auto;
  }



</style>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
}
</script>

