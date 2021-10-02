<template>
  <CalendarInfo />
</template>

<script>
import CalendarInfo from "../components/calendarInfo/CalendarInfo.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    CalendarInfo,
  },

  mounted() {
    this.checkCurrentRoute();
    this.appNavState.currentRoute = "/calendar";
  },
  methods: {
    ...mapMutations(["checkCurrentRoute"]),
  },
  computed: {
    ...mapState(["appNavState"]),
  },
};
</script>
