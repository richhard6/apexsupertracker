<template>
  <v-app id="inspire" dark>
    <v-layout row>
      <v-layout wrap style="height: 200px;">
        <v-navigation-drawer
          v-model="drawer"
          :mini-variant="mini"
          width="201"
          absolute
          dark
          temporary
          app
        >
          <v-list class="pa-1">
            <v-list-tile v-if="mini" @click.stop="mini = !mini">
              <v-list-tile-action>
                <v-icon>chevron_right</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar tag="div">
              <v-list-tile-content>
                <v-list-tile-title>R_ApexTracker</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon @click.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-list class="pt-0" dense>
            <v-divider light></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <router-link to="/index">
                  <v-list-tile-title>Home</v-list-tile-title>
                </router-link>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>search</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <router-link to="/">
                  <v-list-tile-title>Search</v-list-tile-title>
                </router-link>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>star</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <router-link to="/lore">
                  <v-list-tile-title>Lore</v-list-tile-title>
                </router-link>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
      <v-content>
        <v-container fluid xs12 class="containerTrack">
          <v-flex xs12 sm6 offset-sm3>
            <div class="myContainer">
              <v-toolbar dark>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title>R_ ApexTracker</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <div class="notFound"></div>
              <div class="loader">
                <v-flex v-if="loading">
                  <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
                </v-flex>
              </div>
              <v-layout></v-layout>
              <v-flex>
                <div>
                  <v-alert
                    :value="true"
                    class="notFound"
                    v-if="notFound"
                    type="warning"
                    outline
                  >The player you looked for was not found, check if you wrote it right.</v-alert>
                </div>
                <v-toolbar-items class="floating">
                  <v-toolbar>
                    <v-btn icon @click="search">
                      <v-icon>search</v-icon>
                    </v-btn>
                    <v-text-field
                      hide-details
                      input-value="searchValue"
                      type="text"
                      v-model="searchValue"
                      single-line
                      placeholder="Write the player name here..."
                    ></v-text-field>
                  </v-toolbar>
                </v-toolbar-items>
                <v-card v-if="players.length != 0 && loading ==false " class="pa-0">
                  <v-card-title primary-title>
                    <!-- <img src="../assets/logox.png" class="logo"> -->
                    <div>
                      <v-list-tile-avatar>
                        <img class="iconito" :src="players.avatar">
                      </v-list-tile-avatar>
                      <h3 class="headline mb-0">{{players.name}}</h3>

                      <div class="data">Global Rank: {{ players.globalrank }}</div>
                      <div class="data">Kills: {{ players.kills }}</div>
                      <div class="data" v-for="(property, name) in players" :key="name">
                        <p v-if="killNulls(property, name)">{{name | clean}}: {{property}}</p>
                      </div>
                    </div>
                    <v-img
                      aspect-ratio="0.75"
                      height="550px"
                      :src="require('../assets/' + imageURL(players))"
                    ></v-img>
                  </v-card-title>
                </v-card>
              </v-flex>
            </div>
          </v-flex>

          <v-footer fixed dark height="auto">
            <v-card class="flex" flat tile>
              <v-card-title class="red darken-2">
                <strong class="subheading">Follow us on our social networks</strong>

                <v-spacer></v-spacer>
              </v-card-title>

              <v-card-actions class="grey darken-3 justify-center">
                &copy;2019 —
                <strong>Richard</strong>
              </v-card-actions>
            </v-card>
          </v-footer>
        </v-container>
      </v-content>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      url: "https://apextab.com/api/search.php?platform=pc&search=",
      urlAid: "https://apextab.com/api/player.php?aid=",
      aid: [],
      players: [],
      prePlayer: [],
      searchValue: "",
      imgs: [
        "bangalore.png",
        "bloodhound.png",
        "caustic.png",
        "gibraltar.png",
        "mirage.png",
        "lifeline.png",
        "octane.png",
        "pathfinder.png",
        "wraith.png"
      ],
      loading: false,
      notFound: false,
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      mini: false,
      right: null
    };
  },

  filters: {
    clean(value) {
      return (
        value
          .toString()
          .charAt(0)
          .toUpperCase() + value.slice(1).replace("_", " ")
      );
    }
  },

  methods: {
    imageURL(player) {
      if (player.kills_Octane != "0") {
        return this.imgs[6];
      }
      if (player.kills_Pathfinder != "0") {
        return this.imgs[7];
      }

      if (player.kills_Bangalore != "0") {
        return this.imgs[0];
      }
      if (player.kills_Bloodhound != "0") {
        return this.imgs[1];
      }
      if (player.kills_Caustic != "0") {
        return this.imgs[2];
      }
      if (player.kills_Gibraltar != "0") {
        return this.imgs[3];
      }
      if (player.kills_Lifeline != "0") {
        return this.imgs[4];
      }
      if (player.kills_Mirage != "0") {
        return this.imgs[5];
      }
      if (player.kills_Wraith != "0") {
        return this.imgs[8];
      }
    },
    getPlayers() {
      let myHeaders = new Headers();
      let myInit = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default"
      };
      this.loading = true;

      fetch(this.url + this.searchValue, myInit)
        .then(data => {
          return data.json();
        })
        .then(json => {
          if (json.totalresults == 0) {
            this.notFound = true;
          } else {
            this.prePlayer = json;
            this.getPlayerInfo(json.results[0].aid);
          }
        });
    },
    getPlayerInfo(id) {
      let myHeaders = new Headers();
      let myInit = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default"
      };
      fetch(this.urlAid + id, myInit)
        .then(data => {
          return data.json();
        })
        .then(json => {
          this.players = json;
          this.loading = false;
        });
    },
    search() {
      this.getPlayers();
    },
    killNulls(prop, name) {
      if (name == "aid") return false;

      if (prop == "0") return false;

      if (name == "avatar") return false;

      if (name == "lastdata") return false;

      if (name == "legend") return false;

      if (name == "utime") return false;

      if (name == "daily_stats") return false;

      if (name == "playerfound") return false;

      if (name == "name") return false;

      if (name == "globalrank") return false;

      if (name == "kills") return false;

      if (name == "platform") return false;

      if (name == "visits") return false;
      return true;
    }
  },
  computed: {
    // changeBoo() {
    //   return (this.notFound = false);
    // }
  }
};
</script>
<style>
.v-card__title {
  background-color: black;
  color: white;
}
.headline {
  color: white;
}
.logo {
  height: 150px;
}
.data {
  padding-right: 20px;
}

.container {
  background-color: black;

  width: 100%;
  height: 390%;
}

.loader {
  position: absolute;
  margin-left: 45%;
  margin-top: 66%;
}
.grid-list-md text-xs-center {
  justify-content: center;
}
.v-list__tile__avatar {
  justify-content: center;
}
.container {
  padding: 1px;
  max-height: 390%;
  height: 114%;
}
#html {
  overflow: hidden;
  overflow: auto;
}

.containerTrack {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.notFound {
  background-color: black;
  color: red;
}
.v-card__title.red.darken-2 {
  height: 40px;
  padding: 9px;
}
.layout {
  flex: 0 1 auto;
}

.container.fluid {
  max-width: 100%;
  max-height: 92%;
}
.application--wrap {
  background-color: black;
}
a {
  text-decoration: none;
}
a:visited {
  color: white;
}
a:hover {
  color: red;
}
</style>