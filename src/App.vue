<template>
  <v-app>
    <AppNavigation />
    <v-main class="black">
      <SafeArea />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from "./components/appComponents/AppNavigation.vue";
import SafeArea from "./components/appComponents/SafeArea.vue";
export default {
  name: "App",
  components: {
    AppNavigation,
    SafeArea,
  },
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>