<template>
  <v-container>
    <v-row
      v-for="(calenderInfo, index) in viewCalenderInfo"
      :key="index"
      justify="space-between"
      align="start"
    >
      <v-col cols="12" sm="6">
        <v-card class="ma-0 pa-0" :ripple="true" style="cursor: pointer">
          <v-card-text class="ma-0 pa-0">
            <v-img
              :lazy-src="calenderInfo.image"
              :src="calenderInfo.image"
              height="350"
              position="center center"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="ma-0 pa-0" :ripple="true" style="cursor: pointer">
          <v-card-text class="ma-0 pa-0">
            <v-img
              lazy-src="../../../assets/images/image19.png"
              src="../../../assets/images/image19.png"
              height="350"
              position="center center"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["viewCalenderInfo"]),
  },
};
</script>