import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   url:
  //     "https://apextab.com/api/player.php?aid=e7ffde56461b4fe1522f95d91cf346c0",
  //   players: [],
  //   searchValue: "",
  //   myInit: {
  //     method: "GET",
  //     headers: new Headers(),
  //     mode: "cors",
  //     cache: "default"
  //   }
  // },
  // mutations: {
  //   setPlayers(state, data) {
  //     state.players = data;
  //   }
  // },
  // actions: {
  //   getPlayers(context) {
  //     fetch(context.state.url, context.state.myInit)
  //       .then(json => json.json())
  //       .then(data => {
  //         let finalData = [];
  //         data.results.forEach(players => {
  //           finalData.push(players);
  //         });
  //         context.commit("setPlayers", finalData);
  //       });
  //   }
  // },
  // getters: {
  //   getName(state) {
  //     return state.name;
  //   },
  //   getAllPlayers(state) {
  //     return state.players;
  //   }
  // }
});
