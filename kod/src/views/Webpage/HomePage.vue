<template>
  <div id="homepage">
<!--    <b-navbar toggleable="sm" type="dark" variant="dark">-->
<!--      <b-collapse id="nav-text-collapse" is-nav>-->
<!--        <b-nav fill>-->
<!--          <b-nav-item right to="/login" exact exact-active-class="active">User login</b-nav-item>-->
<!--          <b-nav-item right to="/wiki" exact exact-active-class="active">Resources Hub</b-nav-item>-->
<!--        </b-nav>-->
<!--      </b-collapse>-->
<!--    </b-navbar>-->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>King Of Diamonds</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Resource Wiki</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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

  /*#homepage {*/
  /*  text-align: center;*/

  /*}*/
  img {
    max-height: 100%;
    width: auto;
  }



</style>

<script>
export default {
  name: "HomePage",
  data: () => ({
      slide: 0,
      sliding: null,
      drawer: false,
      group: null,
    }),
  }
</script>

