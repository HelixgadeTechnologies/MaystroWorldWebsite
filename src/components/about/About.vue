<template>
  <v-container class="ma-0 pa-0 white" fluid>
    <div class="black">
      <Head />
      <WhatWeDo />
    </div>
    <Footer style="background-color: #191919" />
  </v-container>
</template>

<script>
import Head from "./components/Head.vue";
import WhatWeDo from "./components/WhatWeDo.vue"
import Footer from "../appComponents/Footer.vue";
export default {
  components: {
    Footer,
    Head,
    WhatWeDo
  },
};
</script>