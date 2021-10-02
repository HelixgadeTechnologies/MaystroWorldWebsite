<template>
  <v-carousel cycle :continuous="true" height="500" class="sportsHead" hide-delimiters>
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        class="py-5"
        color="white"
        tile
        outlined
        x-small
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        class="py-5"
        color="white"
        tile
        outlined
        x-small
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </template>
    <v-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <v-img
        height="100%"
        gradient="rgba(0,0,0,0.4), rgba(0,0,0,0.4)"
        :lazy-src="carousel.src"
        :src="carousel.src"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import carousels from "./carousel"
export default {
  data: () => ({
    carousels
  }),
};
</script>


<style scoped>
@import url(../../../assets/styles/sports/sports.css);
</style>