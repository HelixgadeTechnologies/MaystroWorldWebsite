<template>
  <v-container class="ma-0 pa-0 white" fluid>
    <Head />
    <ReadMore />
    <div class="black">
      <SortBy />
      <Collection />
      <UpcomingEvents />
      <Paginate />
    </div>
    <Footer style="background-color: #191919" />
  </v-container>
</template>

<script>
import Head from "./components/Head.vue";
import ReadMore from "./components/ReadMore.vue";
import SortBy from "./components/SortBy.vue";
import Collection from "./components/Collection.vue";
import UpcomingEvents from "./components/UpcomingEvents.vue";
import Paginate from "./components/Paginate.vue";
import Footer from "../appComponents/Footer.vue";
export default {
  components: {
    Head,
    ReadMore,
    SortBy,
    Collection,
    UpcomingEvents,
    Paginate,
    Footer,
  },
};
</script>