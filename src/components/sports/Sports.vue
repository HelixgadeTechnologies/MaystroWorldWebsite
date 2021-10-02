<template>
  <v-container class="ma-0 pa-0 white" fluid>
    <div class="black">
      <Head />
      <Texts/>
    </div>
    <Footer style="background-color: #191919" />
  </v-container>
</template>

<script>
import Footer from "../appComponents/Footer.vue";
import Head from "./components/Head.vue";
import Texts from "./components/Texts.vue";
export default {
  components: {
    Footer,
    Head,
    Texts
  },
};
</script>
