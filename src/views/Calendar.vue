<template>
  <Calendar />
</template>

<script>
import Calendar from "../components/calendar/Calendar.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    Calendar,
  },

  mounted() {
    this.checkCurrentRoute();
  },
  methods: {
    ...mapMutations(["checkCurrentRoute"]),
  },
};
</script>
