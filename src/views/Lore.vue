<template>
  <v-app>
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
            <router-link to="/">
              <v-list-tile-title>Home</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <router-link to="/home">
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
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>chat</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <router-link to="/chatcloud">
              <v-list-tile-title>Chat</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>R_ ApexTracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="floating"></v-toolbar-items>
    </v-toolbar>

    <v-layout>
      <v-flex xs12 sm10 offset-sm1>
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex v-for="img in imgs" :key="img" xs4 d-flex>
                <router-link :to="'/character/' + lores.characters[0][img.split('.')[0]].name ">
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="require('../assets/' +  img)"
                      aspect-ratio="1"
                      class="black miniFoto"
                    >
                      <template v-slot:placeholder>
                        <v-layout fill-height align-center justify-center ma-0>
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-layout>
                      </template>
                    </v-img>
                  </v-card>
                </router-link>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="height"></div>
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
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      lores: null,
      imgs: [
        "bangalore.png",
        "bloodhound.png",
        "caustic.png",
        "gibraltar.png",
        "lifeline.png",
        "mirage.png",
        "octane.png",
        "pathfinder.png",
        "wraith.png"
      ],
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      mini: false,
      right: null
    };
  },
  methods: {
    getData() {
      fetch("lore.json")
        .then(res => res.json())
        .then(data => {
          this.lores = data;
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.kontainer {
  flex-wrap: wrap;
}
@media only screen and (max-width: 959px) {
  .container {
    padding: 0px;
  }
}
.layout.row.wrap {
  height: 92vh;
  padding: 0px;
}
.v-responsive__content {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
  height: 185px;
}
.minifoto {
  margin-bottom: 20px;
}
</style>
