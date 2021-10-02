<template>
  <v-container fluid class="black ma-0 pa-0 mt-n2">
    <v-container>
      <v-row class="d-flex flex-wrap">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
          v-for="(collection, index) in collections"
          :key="index"
        >
          <v-card
            color="transparent"
            class="ma-0 mb-15 pa-0"
            style="cursor: pointer"
            tile
          >
            <v-card-text class="pa-0">
              <v-img
                :lazy-src="collection.image"
                :src="collection.image"
                class="cardImage"
              ></v-img>
            </v-card-text>
            <v-card-text
              class="
                grey--text
                text--lighten-2
                pa-0
                d-flex
                justify-start
                align-center
              "
            >
              <span class="text-caption my-2" v-text="collection.date" />
            </v-card-text>
            <v-card-text
              class="
                grey--text
                text--lighten-2
                pa-0
                d-flex
                justify-start
                align-center
              "
            >
              <span
                class="
                  text-body-2 text-sm-body-1 text-md-h6 text-lg-h6 text-xl-h5
                  font-weight-normal
                  my-2
                "
                v-text="collection.headline"
              />
            </v-card-text>
            <v-card-text class="grey--text text--lighten-2 pa-0 mt-2">
              <span
                class="text-caption font-weight-bold"
                v-text="collection.readMore"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-n10">
      <v-btn text color="pink lighten-1">READ MORE</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import collections from "./collectionData";
export default {
  data: () => ({
    collections,
  }),
};
</script>

<style scoped>
@import url(../../../assets/styles/home/collection.css);
</style>