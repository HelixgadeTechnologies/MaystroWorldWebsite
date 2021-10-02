<template>
  <v-row justify="space-between" align="center">
    <v-col cols="12" sm="3">
      <span class="grey--text text--lighten-5 text-h5">Upcoming events</span>
    </v-col>
    <v-col cols="12" sm="3">
      <v-sheet
        class="d-flex justify-center align-center px-5"
        color="#242424"
        elevation="0"
        height="60"
        width="100%"
      >
        <v-row justify="space-between" align="center">
          <v-col cols="9">
            <v-select
              class="mt-7 rounded-0"
              dense
              :items="items"
              label="Weekdays"
              append-icon="mdi-chevron-down"
              dark
              background-color="#191918"
              flat
              solo
            ></v-select>
          </v-col>
          <v-col sm="3">
            <v-sheet width="100%" height="1" class="white"></v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="3">
      <v-sheet
        class="d-flex justify-center align-center px-5"
        color="#242424"
        elevation="0"
        height="60"
        width="100%"
      >
        <v-row justify="space-between" align="center">
          <v-col cols="9">
            <v-select
              class="mt-7 rounded-0"
              dense
              :items="items"
              label="Event type"
              append-icon="mdi-chevron-down"
              background-color="#191918"
              dark
              flat
              solo
            ></v-select>
          </v-col>
          <v-col sm="3">
            <v-sheet width="100%" height="1" class="white"></v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="3">
      <v-sheet
        class="d-flex justify-center align-center px-5"
        color="#242424"
        elevation="0"
        height="60"
        width="100%"
      >
        <v-row justify="space-between" align="center">
          <v-col cols="9">
            <v-select
              class="mt-7 rounded-0"
              dense
              :items="items"
              label="Categoty"
              append-icon="mdi-chevron-down"
              background-color="#191918"
              dark
              flat
              solo
            ></v-select>
          </v-col>
          <v-col sm="3">
            <v-sheet width="100%" height="1" class="white"></v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import posts from "./posts";
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>