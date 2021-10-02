import router from "../../router";
export default {
  state: {
    viewCalenderInfo: [],
  },
  getters: {
    viewCalenderInfo: (state) => state.viewCalenderInfo,
  },
  mutations: {
    calenderInfo: (state, event) => {
        state.viewCalenderInfo = []
        state.viewCalenderInfo.push(event)
        router.push("/calendarInfo")
    }
  },
  actions: {
    calenderInfo({ commit }, event) {
      commit("calenderInfo", event);
    },
  },
};
