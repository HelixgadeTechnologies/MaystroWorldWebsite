<template>
  <div>
    <AppBar />
    <Drawer />
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import Drawer from "./Drawer.vue"
export default {
  components: {
    AppBar,
    Drawer
  },
};
</script>