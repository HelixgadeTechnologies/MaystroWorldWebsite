<template>
  <v-container class="py-15">
    <v-row class="my-15" justify="space-between" align="start">
      <v-col cols="12" sm="6">
        <div
          class="
            d-flex
            flex-column
            justify-start
            align-center align-md-start
            mt-7
          "
        >
          <p class="grey--text text--lighten-5 text-body-1">Contact</p>
          <v-img
            width="60"
            src="../../../assets/images/logoLight.png"
            lazy-src="../../../assets/images/logoLight.png"
          />
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row justify="space-between" align="start">
          <v-col class="py-0" cols="12" sm="12" md="6">
            <v-text-field
              dark
              label="First name*"
              color="grey lighten-5"
            ></v-text-field>
          </v-col>
          <v-col class="py-0" cols="12" sm="12" md="6">
            <v-text-field
              dark
              label="Last name*"
              color="grey lighten-5"
            ></v-text-field>
          </v-col>
          <v-col class="py-0" cols="12" sm="12" md="6">
            <v-text-field
              dark
              type="email"
              color="grey lighten-5"
              label="Email address*"
            ></v-text-field>
          </v-col>
          <v-col class="py-0" cols="12" sm="12" md="6">
            <v-text-field
              dark
              color="grey lighten-5"
              label="Organisation company (Optional)"
            ></v-text-field>
          </v-col>
          <v-col class="py-0 mt-5" cols="12" sm="12" md="6">
            <v-select
              dark
              solo
              :items="items"
              class="rounded-0"
              label="Select country"
              background-color="#191918"
              append-icon="mdi-chevron-down"
            ></v-select>
          </v-col>
          <v-col class="py-0" cols="12">
            <v-textarea
              dark
              dense
              rows="2"
              label="Commets"
              color="grey lighten-5"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="mt-15" cols="12">
        <div class="d-flex justify-end align-center">
          <span
            style="cursor: pointer"
            class="grey--text text--lighten-5 text-body-1 mr-3"
            >Submit</span
          >
          <v-btn
            tile
            x-small
            outlined
            width="5"
            height="32"
            color="grey lighten-5"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
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