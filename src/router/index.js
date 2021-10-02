import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cover from "../views/Cover.vue";
import About from "../views/About.vue";
import Music from "../views/Music.vue";
import Sports from "../views/Sports.vue";
import SportsRoster from "../views/SportsRoster.vue";
import Blog from "../views/Blog.vue";
import Calendar from "../views/Calendar.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cover",
    name: "Cover",
    component: Cover,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/misicDetails",
    name: "MisicDetails",
    component: () => import("../views/MisicDetails.vue"),
  },
  {
    path: "/sports",
    name: "Sports",
    component: Sports,
  },
  {
    path: "/sportsRoster",
    name: "SportsRoster",
    component: SportsRoster,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/calendarInfo",
    name: "CalendarInfo",
    component: () => import("../views/CalendarInfo.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
