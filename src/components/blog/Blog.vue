<template>
  <v-container class="ma-0 pa-0 white" fluid>
    <div class="black pb-5">
      <Head />
      <v-container class="py-0 blogScroll">
        <Posts />
      </v-container>
      <Paginate />
    </div>
    <Footer style="background-color: #191919" />
  </v-container>
</template>

<script>
import Footer from "../appComponents/Footer.vue";
import Head from "./components/Head.vue";
import Posts from "./components/Posts.vue";
import Paginate from "./components/Paginate.vue";
export default {
  components: {
    Footer,
    Head,
    Posts,
    Paginate,
  },
};
</script>

<style scoped>
@import url(../../assets/styles/blog/blog.css);
</style>