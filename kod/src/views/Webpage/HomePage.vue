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


    <!--  Carousel-->
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
        <router-link to="/character-creator/race" class="text-decoration-none">Build your character</router-link>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">

      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
<!--      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">-->
<!--        <p>-->
<!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt-->
<!--          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.-->
<!--        </p>-->
<!--      </b-carousel-slide>-->
    </b-carousel>
    <div class="logo">
    <img src="../../assets/King_of_Diamonds-removebg-preview.png">
    </div>
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
    margin-bottom: 0px;
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

