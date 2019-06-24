import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Lore from "./views/Lore.vue";
import Index from "./views/Index.vue";
import Character from "./views/Character.vue";

import Chatcloud from "./components/Chatcloud.vue";

import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },

    {
      path: "/about",
      name: "about",

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/lore",
      name: "lore",
      component: Lore
    },
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/character/:name",
      name: "character",
      component: Character,
      props: true
    },

    {
      path: "/chatcloud",
      name: "Chatcloud",
      component: Chatcloud
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
