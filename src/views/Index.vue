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
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>R_ ApexTracker</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-img
          class="apext"
          height="26"
          src="https://www.apexlegendshut.com/apex-legends-font-generator-images/dD13ZWxjb21lIHRvIFJfYXBleHRyYWNrZXImcz0xMDAmYz0yMTI1Mjkm.png"
        ></v-img>
        <v-carousel height="300">
          <v-carousel-item v-for="news in urlNews" :key="news">
            <v-img :src="news"></v-img>
          </v-carousel-item>
        </v-carousel>
        <iframe
          width="390"
          height="210"
          src="https://www.youtube.com/embed/PZnG4Ant0Ao"
          frameborder="1"
          margin-left="10"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-container>
    </v-content>
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
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      mini: false,
      right: null,
      urlNews: [
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/05/apex-featured-tile-anti-cheat-blog.jpg.adapt.crop16x9.431p.jpg",

        "https://media.contentapi.ea.com/content/dam/news/www-ea/images/2019/04/apex-featured-image-generic-lineup.jpg.adapt.crop16x9.431p.jpg",

        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/04/apex-featured-tile-april-game-update-1-1-1.jpg.adapt.crop16x9.431p.jpg"
      ]
    };
  }
};
</script>

<style scoped>
.container.fluid {
  margin-top: 33px;
}
</style>
