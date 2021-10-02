<template>
  <About />
</template>

<script>
import About from "../components/about/About.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    About,
  },

  mounted() {
    this.checkCurrentRoute();
  },
  methods: {
    ...mapMutations(["checkCurrentRoute"]),
  },
};
</script>
