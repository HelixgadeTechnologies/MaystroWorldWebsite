<template>
  <v-container class="ma-0 pa-0 white" fluid>
    <div class="black">
      <Form />
    </div>
    <Footer style="background-color: #191919" />
  </v-container>
</template>

<script>
import Footer from "../appComponents/Footer.vue";
import Form from "./components/Form.vue";
export default {
  components: {
    Footer,
    Form,
  },
};
</script>

<style scoped>
@import url(../../assets/styles/blog/blog.css);
</style>