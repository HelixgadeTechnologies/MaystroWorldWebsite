<template>
  <v-container class="mt-15">
    <v-row
      v-for="(calenderInfo, index) in viewCalenderInfo"
      :key="index"
      justify="space-between"
      align="center"
    >
      <v-col cols="12" sm="12" md="3" lg="2">
        <div class="d-flex justify-start align-center">
          <span
            class="grey--text text--lighten-5 text-h2 font-weight-bold"
            v-text="calenderInfo.date.day"
          />
          <div class="d-flex flex-column ml-3">
            <span
              class="grey--text text--lighten-5 text-h6 font-weight-bold my-0"
              v-text="calenderInfo.date.month"
            />
            <span class="grey--text text-body-1 my-0">Saturday</span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="8">
        <p class="my-0 grey--text text--lighten-5 text-h6 font-weight-bold">
          Lorem ipsum dol sitamet sectetur
        </p>
        <p class="my-0 grey--text text-body-2 font-italic">
          April 13, 2019 - October 14, 2022
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="3" lg="2">
        <div class="d-flex flex-column justify-center align-start align-md-end">
          <p class="my-0 grey--text text-body-1 font-italic">All Events</p>
          <p class="my-0 grey--text text-body-1 font-italic">
            + Google Calendar
          </p>
          <p class="my-0 grey--text text-body-1 font-italic">+ iCal Export</p>
        </div>
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
