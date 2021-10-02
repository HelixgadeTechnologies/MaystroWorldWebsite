<template>
  <Contact />
</template>

<script>
import Contact from "../components/contact/Contact.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    Contact,
  },

  mounted() {
    this.checkCurrentRoute();
  },
  methods: {
    ...mapMutations(["checkCurrentRoute"]),
  },
};
</script>
