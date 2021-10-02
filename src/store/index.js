import Vue from "vue";
import Vuex from "vuex";
import appNavState from "./modules/appNavState";
import music from "./modules/music"
import calender from "./modules/calender"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appNavState,
    music,
    calender
  },
});
