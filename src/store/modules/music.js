import router from "../../router";
export default {
  state: {
    viewMusicInfo: [],
  },
  getters: {
    viewMusicInfo: (state) => state.viewMusicInfo,
  },
  mutations: {
    seeMusicInfo: (state, song) => {
      state.viewMusicInfo = [];
      state.viewMusicInfo.push(song);
      router.push("/misicDetails");
    },
  },
  actions: {
    seeMusicInfo({ commit }, song) {
      commit("seeMusicInfo", song);
    },
  },
};
