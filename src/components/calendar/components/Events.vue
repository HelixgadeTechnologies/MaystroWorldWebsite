<template>
  <v-row justify="space-between" align="start">
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
        :ripple="true"
        color="transparent"
        style="cursor: pointer"
        class="upcomingEventsCards ma-0 pa-0 mb-15"
        @click="calenderInfo(event)"
      >
        <v-card-text class="ma-0 pa-0">
          <v-img class="cardImage" :lazy-src="event.image" :src="event.image">
            <v-toolbar
              flat
              color="transparent"
              class="ma-2 mx-1 cardToolbar"
              dense
            >
              <v-spacer />
              <v-btn class="white" depressed fab small>
                <img width="19" src="../../../assets/images/paperPlane.png" />
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
            >
              <div class="d-flex flex-column">
                <span
                  class="text-body-2 text-center grey--text text--lighten-2"
                  v-text="event.date.month"
                />
                <span
                  class="
                    text-body-1
                    font-weight-bold
                    grey--text
                    text--lighten-2
                  "
                  v-text="event.date.day"
                />
              </div>
            </v-col>
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
</template>

<script>
import { mapActions } from "vuex";
import events from "./events";
export default {
  data: () => ({
    events,
  }),
  methods: {
    ...mapActions(["calenderInfo"]),
  },
};
</script>