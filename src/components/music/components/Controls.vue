<template>
  <v-container class="mx-0 px-0 mt-10">
    <v-row class="mx-lg-4 mx-xl-n12" justify="space-between" align="start">
      <v-col cols="12">
        <div class="input">
          <input type="text" placeholder="SEARCH MUSIC" />
          <img src="../../../assets/images/search.png" alt="" />
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="5" xl="5">
        <div class="input2 input">
          <input type="text" placeholder="FILTER BY GENRE" />
        </div>
      </v-col>
      <v-col
        class="
          d-flex
          justify-end justify-sm-start justify-md-end
          align-center
          mt-3
        "
        cols="12"
        sm="12"
        md="8"
        lg="6"
        xl="6"
      >
        <span class="grey--text text--lighten-5 letters"
          >#ABCDEFGHIJKLMNOPQRSTUVWXYZ[</span
        >
      </v-col>
      <v-col cols="12">
        <p class="grey--text text--lighten-5 musicRoster">Music Roster</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@import url(../../../assets/styles/controles/controls.css);
</style>