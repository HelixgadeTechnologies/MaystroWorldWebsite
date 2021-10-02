<template>
  <v-container class="my-15">
    <v-row v-for="(musicInfo, index) in viewMusicInfo" :key="index" justify="space-between" align="start">
      <v-col class="d-flex justify-start align-center" cols="12">
        <v-btn
          width="5"
          height="32"
          color="white"
          to="/music"
          outlined
          x-small
          tile
          @click="() => this.$router.push('/music')"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <span class="grey--text text--lighten-5 ml-3">Back</span>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          lazy-src="../../../assets/images/cover1.png"
          :src="musicInfo.coverImage"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <p style="font-weight: 500" class="grey--text text--lighten-5 text-h4" v-text="musicInfo.artist" />
        <p class="grey--text text--lighten-5 text-h6 font-italic mt-n3">
          lorraine.adeyefa@gmail.com
        </p>
        <p class="grey--text text--lighten-5 text-h6 mt-n3">+1-310-273-6700</p>
        <blockquote class="grey--text text--lighten-5 text-body-1 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudan
        </blockquote>
        <div class="d-flex justify-start align-center mt-4">
          <v-btn tile text x-small width="5" height="32" class="mr-5">
            <img src="../../../assets/images/youtube.png" alt="" />
          </v-btn>
          <v-btn tile text x-small width="5" height="32" class="mr-5">
            <img src="../../../assets/images/instagram.png" alt="" />
          </v-btn>
          <v-btn tile text x-small width="5" height="32" class="mr-5">
            <img src="../../../assets/images/facebookOutlined.png" alt="" />
          </v-btn>
          <v-btn tile text x-small width="5" height="32" class="mr-5">
            <img src="../../../assets/images/twitter.png" alt="" />
          </v-btn>
          <v-btn tile text x-small width="5" height="32">
            <img src="../../../assets/images/headphones.png" alt="" />
          </v-btn>
        </div>
        <v-btn
          outlined
          tile
          x-large
          width="220"
          height="70"
          class="mt-4"
          color="grey lighten-5"
          style="text-transform: initial"
        >
          Sign me Up
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["viewMusicInfo"]),
  },
};
</script>
