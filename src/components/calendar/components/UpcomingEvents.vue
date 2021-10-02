<template>
  <v-container class="ma-0">
    <Controls />
    <Events />
  </v-container>
</template>

<script>
import Controls from "./Controls.vue";
import Events from "./Events.vue";
export default {
  components: {
    Controls,
    Events
  },
};
</script>