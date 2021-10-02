<template>
  <v-container class="pb-10 mt-n6">
    <v-row justify="space-between" align="start">
      <v-col
        v-for="(sport, index) in sports"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card tile :ripple="true" color="transparent" class="ma-0 pa-0">
          <v-card-text class="ma-0 pa-0">
            <v-img :lazy-src="sport.image" :src="sport.image"></v-img>
          </v-card-text>
          <v-card-text class="text-center">
            <span
              class="grey--text text--lighten-5 text-body-1 font-weight-bold"
              v-text="sport.name"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sports from "./sports";
export default {
  data: () => ({
    sports,
  }),
};
</script>