<template>
  <v-container fluid class="black mt-10 mb-15">
    <v-container>
      <v-toolbar class="mb-5" color="transparent">
        <v-toolbar-title
          class="
            text-headline text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5
            ml-n4
            grey--text
            text--lighten-2
          "
          >Upcoming events</v-toolbar-title
        >
        <v-spacer />
        <v-sheet
          class="mr-n4 pa-2 px-5 d-flex justify-space-between align-center"
          width="190"
          color="#242424"
        >
          <v-btn
            style="text-transform: initial"
            tile
            depressed
            color="#191918"
            class="white--text px-5 ml-n3"
            >View more</v-btn
          >
          <v-sheet color="white mr-n2" width="38" height="1"></v-sheet>
        </v-sheet>
      </v-toolbar>
      <v-row class="d-flex flex-wrap">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
          v-for="(event, index) in events"
          :key="index"
        >
          <v-card
            tile
            color="transparent"
            class="upcomingEventsCards ma-0 pa-0 mb-15"
          >
            <v-card-text class="ma-0 pa-0">
              <v-img class="cardImage" :lazy-src="event.image" :src="event.image">
                <v-toolbar flat color="transparent" class="ma-2 mx-1 cardToolbar" dense>
                  <v-spacer />
                  <v-btn class="white" depressed fab small>
                    <img
                      width="19"
                      src="../../../assets/images/paperPlane.png"
                    />
                  </v-btn>
                  <v-btn class="white ml-2" depressed fab small>
                    <img width="19" src="../../../assets/images/bell.png" />
                  </v-btn>
                  <v-btn class="white ml-2" depressed fab small>
                    <img width="19" src="../../../assets/images/heart.png" />
                  </v-btn>
                </v-toolbar>
              </v-img>
            </v-card-text>

            <v-card-text class="ma-0 pa-0 mt-3">
              <v-row justify="space-between" align="start">
                <v-col
                  cols="12"
                  sm="2"
                  md="2"
                  lg="2"
                  xl="2"
                  class="d-flex justify-start"
                  v-html="event.date"
                />
                <v-col cols="12" sm="10" md="10" lg="10" xl="10">
                  <span
                    class="text-body-1 grey--text text--lighten-2"
                    v-text="event.title"
                  />
                  ><br />
                  <span
                    class="text-caption grey--text text--darken-1"
                    v-text="event.body"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import events from "./upcomingEventData";
export default {
  data: () => ({
    events,
  }),
};
</script>

<style scoped>
@import url(../../../assets/styles/home/collection.css);
</style>