<template>
  <v-container class="ma-0 pa-0 white" fluid>
    <div class="black pb-5">
      <Head />
      <Title />
      <v-container class="mb-15 blogScroll">
        <Sports />
      </v-container>
      <SeeMore />
    </div>
    <Footer style="background-color: #191919" />
  </v-container>
</template>

<script>
import Footer from "../appComponents/Footer.vue";
import Head from "./components/Head.vue";
import Title from "./components/Title.vue";
import Sports from "./components/Sports.vue";
import SeeMore from "./components/SeeMore.vue";
export default {
  components: {
    Footer,
    Head,
    Title,
    Sports,
    SeeMore,
  },
};
</script>

<style scoped>
@import url(../../assets/styles/blog/blog.css);
</style>