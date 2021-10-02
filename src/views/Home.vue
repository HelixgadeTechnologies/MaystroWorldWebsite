<template>
  <Home />
</template>

<script>
import Home from "../components/home/Home";
import { mapMutations } from "vuex"

export default {
  components: {
    Home,
  },

  mounted() {
    this.checkCurrentRoute();
  },
  methods: {
    ...mapMutations(["checkCurrentRoute"]),
  },
};
</script>
