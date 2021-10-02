<template>
  <v-container fluid class="ma-0 pa-0 mb-15 calendarHead">
    <div class="background">
      <v-img
        height="100%"
        position="center center"
        lazy-src="../../../assets/images/colorful.png"
        src="../../../assets/images/colorful.png"
      ></v-img>
      <v-container class="ma-0 pa-0 backgroundContainer">
        <v-row justify="space-between" align="center">
          <v-col class="col" cols="12">
            <v-sheet
              class="d-flex justify-center align-center px-3 colSheet"
              color="#242424"
              elevation="0"
              width="100%"
            >
              <v-row
                class="mx-0 mx-sm-3 mx-lg-15 mt-4"
                justify="space-between"
                align="center"
              >
                <v-col cols="12" sm="6" md="6" lg="4">
                  <v-text-field
                    dark
                    dense
                    color="white"
                    label="Looking for"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="4">
                  <v-text-field
                    dark
                    dense
                    color="white"
                    label="Where"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="4">
                  <v-select
                    flat
                    solo
                    dark
                    dense
                    :items="items"
                    class="rounded-0"
                    label="When"
                    background-color="#191918"
                    append-icon="mdi-chevron-down"
                  ></v-select>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>

<style scoped>
@import url(../../../assets/styles/calendar/calendar.css);
</style>