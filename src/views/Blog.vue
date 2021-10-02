<template>
  <Blog />
</template>

<script>
import Blog from "../components/blog/Blog.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    Blog,
  },

  mounted() {
    this.checkCurrentRoute();
  },
  methods: {
    ...mapMutations(["checkCurrentRoute"]),
  },
};
</script>
