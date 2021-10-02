export default {
  state: {
    drawer: false,
    appNavRoutes: [
      { title: "Home", to: "/" },
      { title: "About", to: "/about" },
      { title: "Music", to: "/music" },
      { title: "Sports", to: "/sports" },
      { title: "Blog", to: "/blog" },
      { title: "Calendar", to: "/calendar" },
      { title: "Contact", to: "/contact" },
    ],
    currentRoute: ""
  },
  getters: {
    appNavRoutes: state => state.appNavRoutes
  },
  mutations: {
    checkCurrentRoute: (state) => {
      state.currentRoute = window.location.pathname;
    },
  },
};
