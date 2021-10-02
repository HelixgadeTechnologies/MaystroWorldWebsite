<template>
  <v-container class="ma-0 pa-0 white" fluid>
    <div class="black">
      <Songs />
    </div>
    <Footer style="background-color: #191919" />
  </v-container>
</template>

<script>
import Footer from "../appComponents/Footer.vue";
import Songs from "./components/Songs.vue";
export default {
  components: {
    Footer,
    Songs,
  },
};
</script>
