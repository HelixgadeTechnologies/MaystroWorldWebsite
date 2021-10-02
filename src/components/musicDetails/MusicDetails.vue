<template>
  <v-container class="ma-0 pa-0 white" fluid>
    <div class="black d-flex justify-center align-start">
      <Info />
    </div>
    <Footer style="background-color: #191919" />
  </v-container>
</template>

<script>
import Footer from "../appComponents/Footer.vue";
import Info from "./components/Info.vue";
export default {
  components: {
    Footer,
    Info,
  },
};
</script>

<style scoped>
@import url(../../assets/styles/blog/blog.css);
</style>