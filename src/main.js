import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Firebase from "firebase";
import config from "./config";
import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);

Vue.config.productionTip = false;

require("firebase/firestore");

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    Firebase.initializeApp(config);
  }
}).$mount("#app");
