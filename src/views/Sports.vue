<template>
  <Sports />
</template>

<script>
import Sports from '../components/sports/Sports.vue'
import { mapMutations } from "vuex"

export default {
  components: {
    Sports,
  },

  mounted() {
    this.checkCurrentRoute();
  },
  methods: {
    ...mapMutations(["checkCurrentRoute"]),
  },
};
</script>
