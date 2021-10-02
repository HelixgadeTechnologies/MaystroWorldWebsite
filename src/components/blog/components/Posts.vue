<template>
  <v-container class="ma-0 pa-1">
    <v-row justify="space-between" align="start">
      <v-col
        v-for="(post, index) in posts"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        xl="4"
      >
        <v-card
          color="transparent"
          class="ma-0 mb-15 pa-0"
          style="cursor: pointer"
          tile
        >
          <v-card-text class="ma-0 pa-0">
            <v-img :lazy-src="post.coverImage" :src="post.coverImage"></v-img>
          </v-card-text>
          <v-card-text
            class="
              grey--text
              text--lighten-2
              pa-0
              d-flex
              justify-start
              align-center
            "
          >
            <span class="text-caption my-2" v-text="post.date" />
          </v-card-text>
          <v-card-text
            class="
              grey--text
              text--lighten-2
              pa-0
              d-flex
              justify-start
              align-center
            "
          >
            <span
              class="
                text-body-2 text-sm-body-1 text-md-h6 text-lg-h6 text-xl-h5
                font-weight-normal
                my-2
              "
              v-text="post.headline"
            />
          </v-card-text>
          <v-card-text :class="post.readMoreText" class="pa-0 mt-2">
            <span
              class="text-caption font-weight-bold"
              v-text="post.readMore"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import posts from "./posts";
export default {
  data: () => ({
    posts,
  }),
};
</script>