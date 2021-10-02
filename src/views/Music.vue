<template>
  <Music />
</template>

<script>
import Music from '../components/music/Music.vue'
import { mapMutations } from "vuex"

export default {
  components: {
    Music,
  },

  mounted() {
    this.checkCurrentRoute();
  },
  methods: {
    ...mapMutations(["checkCurrentRoute"]),
  },
};
</script>
