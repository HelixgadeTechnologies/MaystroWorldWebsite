<template>
  <v-container class="ma-0 pa-0 white" fluid>
    <div class="black">
      <Head />
      <InfoHead />
      <InfoImages />
      <InfoBlock />
      <InfoSumary />
      <BookATicket />
    </div>
    <Footer style="background-color: #191919" />
  </v-container>
</template>

<script>
import Footer from "../appComponents/Footer.vue";
import Head from "./components/Head.vue";
import InfoHead from "./components/InfoHead.vue";
import InfoImages from "./components/InfoImages.vue";
import InfoBlock from "./components/InfoBlock.vue";
import InfoSumary from "./components/InfoSumary.vue";
import BookATicket from "./components/BookATicket.vue";
export default {
  components: {
    Footer,
    Head,
    InfoHead,
    InfoImages,
    InfoBlock,
    InfoSumary,
    BookATicket
  },
};
</script>