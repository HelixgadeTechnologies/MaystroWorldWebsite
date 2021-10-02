<template>
  <v-container class="mt-15">
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <p class="grey--text text--lighten-5 text-h5">
          The stories behind the<br />storytellers.
        </p>
      </v-col>
      <v-col cols="12">
        <v-sheet
          class="d-flex justify-center align-center px-3"
          color="#242424"
          elevation="0"
          height="60"
          width="100%"
        >
          <v-row justify="space-between" align="center">
            <v-col cols="5" sm="3" md="3" lg="2" xl="2">
              <v-select
                class="mt-7 rounded-0"
                dense
                :items="items"
                label="Filter by"
                append-icon="mdi-chevron-down"
                dark
                flat
                solo
              ></v-select>
            </v-col>
            <v-col sm="9" md="9" lg="10" xl="10">
              <v-sheet width="100%" height="1" class="grey darken-3"></v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>
