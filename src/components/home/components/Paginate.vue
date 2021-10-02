<template>
  <v-sheet class="d-flex justify-center align-center px-5" color="#F3A5D9">
    <v-container class="d-flex justify-center align-center">
      <v-sheet
        class="d-flex justify-center align-center px-5"
        color="transparent"
        elevation="0"
        height="170"
        width="1000"
      >
        <v-row justify="space-between" align="center">
          <v-col cols="12" md="2" lg="2" xl="2" class="d-flex justify-center">
            <v-icon class="white--text mr-2">mdi-twitter</v-icon>
            <span class="white--text text-body-2">5 years ago</span>
          </v-col>
          <v-col cols="12" md="8" lg="8" xl="8" class="d-flex justify-center">
            <span
              class="
                text-body-2
                white--text
                font-italic font-weight-bold
                text-center text-md-left
              "
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </span>
          </v-col>
          <v-col cols="12" md="2" lg="2" xl="2" class="d-flex justify-center">
            <v-btn outlined tile x-small color="white" class="py-5 mr-2">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn outlined tile x-small color="white" class="py-5 ml-2">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>