<template>
  <SportsRoster />
</template>

<script>
import SportsRoster from "../components/sportsRoster/SportsRoster.vue";
import { mapState } from "vuex";

export default {
  components: {
    SportsRoster,
  },

  mounted() {
    this.appNavState.currentRoute = "/sports";
  },
  computed: {
    ...mapState(["appNavState"]),
  },
};
</script>
