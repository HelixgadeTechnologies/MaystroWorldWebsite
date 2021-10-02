<template>
  <MusicDetails />
</template>

<script>
import MusicDetails from "../components/musicDetails/MusicDetails.vue";
import { mapState } from "vuex";

export default {
  components: {
    MusicDetails,
  },
  mounted() {
    this.appNavState.currentRoute = "/music"
  },
  computed: {
    ...mapState(["appNavState"])
  }
};
</script>
