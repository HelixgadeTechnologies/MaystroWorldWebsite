<template>
  <v-navigation-drawer
    color="#191919"
    right
    v-model="appNavState.drawer"
    fixed
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(route, index) in appNavRoutes"
        :key="index"
        :to="route.to"
        link
        active-class="grey darken-3"
        class="rounded-lg mx-2"
      >
        <v-list-item-content>
          <v-list-item-title class="grey--text text--lighten-4">{{
            route.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["appNavState"]),
    ...mapGetters(["appNavRoutes"]),
    appNavState: {
      get() {
        return this.$store.state.appNavState;
      },
      set(new_value) {
        this.$store.state.appNavState = new_value;
      },
    },
  },
};
</script>