<template>
  <v-container class="black d-flex justify-center my-8">
    <v-sheet
      class="d-flex justify-center align-center px-5"
      color="#100F0D"
      elevation="0"
      height="70"
      width="1000"
    >
      <v-row justify="space-between" align="center">
        <v-col cols="5" sm="3" md="3" lg="3" xl="3">
          <v-select
            class="mt-7 rounded-0"
            dense
            :items="items"
            label="Sort by"
            append-icon="mdi-chevron-down"
            dark
            flat
            solo
          ></v-select>
        </v-col>
        <v-col sm="9" md="9" lg="9" xl="9">
          <v-sheet width="100%" height="1" class="grey darken-3"></v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>