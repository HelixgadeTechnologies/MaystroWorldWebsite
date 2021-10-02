<template>
  <v-app-bar fixed color="#191919" class="appbar px-5" flat>
    <v-avatar size="40" tile>
      <v-img
        src="../../assets/images/logo.png"
        lazy-src="../../assets/images/logo.png"
      />
    </v-avatar>
    <v-spacer />

    <div class="hidden-sm-and-down">
      <router-link
        v-for="(route, index) in appNavRoutes"
        :key="index"
        :class="{ activeRoute: appNavState.currentRoute == route.to }"
        class="navLink ml-0 ml-sm-6 ml-md-6"
        :to="route.to"
        v-text="route.title"
      />
    </div>
    <v-btn
      @click="appNavState.drawer = true"
      class="hidden-md-and-up"
      color="#F3F3F3"
      icon
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters    } from "vuex";
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


<style scoped>
@import url(../../assets/styles/navigation/appbar.css);
.activeRoute {
  color: #fff;
  font-weight: 600;
  transition: .3s ease-in-out;
  position: relative;
}

.activeRoute::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 50%; 
  height: 2px;
  background: #fff;
}
</style>