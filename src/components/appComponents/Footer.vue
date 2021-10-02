<template>
  <v-container fluid class="py-10 px-10">
    <v-row justify="space-between" align="start">
      <v-col cols="12" sm="12" md="9" lg="9">
        <v-col
          class="
            d-flex
            justify-center
            justify-sm-start
            justify-md-start
            justify-lg-start
            justify-xl-start
          "
          cols="12"
        >
          <v-avatar size="50" tile>
            <v-img
              lazy-src="../../assets/images/logo.png"
              src="../../assets/images/logo.png"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col
          class="
            text-center text-sm-left text-md-left text-lg-left text-xl-left
          "
          cols="12"
          sm="9"
        >
          <span
            class="
              grey--text
              text--lighten-5 text-body-2 text-sm-body-2 text-md-body-2
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </v-col>
      </v-col>
      <v-col cols="12" sm="12" md="3" lg="3" xl="2">
        <div
          class="
            text-center text-sm-left
            ml-3 ml-sm-3 ml-md-10 ml-lg-10 ml-xl-15
          "
        >
          <span
            class="
              grey--text
              text--lighten-5 text-body-2 text-sm-body-2 text-md-body-2
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-row justify="space-between" align="center">
          <v-col cols="12" sm="12" md="9" lg="10" xl="10">
            <v-col class="text-center text-sm-left" cols="12">
              <span
                class="
                  grey--text
                  text--lighten-5 text-body-2 text-sm-body-2 text-md-body-2
                "
                >Member of consectetur@gade.co.uk</span
              >
            </v-col>
            <v-col class="text-center text-sm-left" cols="12">
              <v-btn tile small depressed class="py-6" color="#408BC4">
                <img src="../../assets/images/facebook.png" alt="" />
              </v-btn>
              <v-btn tile small depressed class="py-6 mx-4" color="#56ADEE">
                <v-icon class="white--text">mdi-twitter</v-icon>
              </v-btn>
              <v-btn tile small depressed class="py-6" color="#56ADEE">
                <v-icon class="white--text">mdi-instagram</v-icon>
              </v-btn>
            </v-col>
          </v-col>
          <v-col
            class="text-center text-sm-left text-md-right"
            cols="12"
            sm="12"
            md="3"
            lg="2"
            xl="2"
          >
            <span
              class="
                grey--text
                text--lighen-5 text-body-2 text-sm-body-2 text-md-body-2
              "
              >Member of consectetur@gade.co.uk</span
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>