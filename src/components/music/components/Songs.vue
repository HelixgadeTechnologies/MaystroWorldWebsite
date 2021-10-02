<template>
  <v-container fluid class="ma-0 pa-0">
    <v-img
      lazy-src="../../../assets/images/musicBg.png"
      src="../../../assets/images/musicBg.png"
      position="center center"
    >
      <v-container fluid>
        <v-row
          class="mx-0 mx-md-10 mx-lg-12 mx-xl-15"
          justify="space-around"
          align="start"
        >
          <v-col cols="12">
            <v-container class="px-0">
              <Controls />
            </v-container>
          </v-col>
          <v-col
            v-for="(song, index) in songs"
            :key="index"
            cols="12"
            class="mt-n10"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <v-card
              flat
              tile
              class="mb-12 mx-0 mx-lg-5 mx-xl-15"
              color="transparent"
              style="cursor: pointer"
              @click="seeMusicInfo(song)"
            >
              <v-card-text class="ma-0 pa-0">
                <v-img
                  :lazy-src="song.coverImage"
                  :src="song.coverImage"
                ></v-img>
              </v-card-text>
              <v-card-text class="text-center">
                <span
                  class="
                    text-body-1 text-xl-h6
                    font-weight-bold
                    grey--text
                    text--lighten-5
                  "
                  v-text="song.artist"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12 d-flex justify-center align-center mb-15">
            <v-btn tile outlined color="white" class="px-15 py-5"
              >See more</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
import songs from "./songlist";
import Controls from "./Controls.vue";
import { mapActions } from 'vuex';
export default {
  data: () => ({
    songs,
  }),
  components: {
    Controls,
  },
  methods: {
    ...mapActions(["seeMusicInfo"])
  }
};
</script>