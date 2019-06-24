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

    <v-content>
      <v-container class="kontainer" fluid>
        <!-- <div height="auto " v-for="message in messages" :key="message.id">
          {{message.message}}
          <span class="time">{{message.createdAt}} {{message.author}}</span>
        </div>-->
        <div class="megaprueba" max-height="300px">
          <ul class="messages prueba" v-chat-scroll="{always: false, smooth: true}">
            <li class="message" v-for="message in messages" :key="message.id">
              {{message.message}}
              <span class="time">{{message.createdAt}} {{message.author}}</span>
            </li>
          </ul>
        </div>
        <v-flex xs12 sm6 md3>
          <v-text-field
            dark
            class="inputx"
            v-model="message"
            @keyup.enter="saveMessage"
            placeholder="Write your message..."
            outline
            auto-grow
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-btn ref="button" color="primary" block @click="$vuetify.goTo(target, options)">scroll</v-btn>
        </v-flex>
      </v-container>
    </v-content>
    <v-footer fixed dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="red darken-2">
          <strong class="subheading">Follow us on our social networkss</strong>

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
import firebase from "firebase";
export default {
  data() {
    return {
      message: null,
      messages: [],
      authUser: {},
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
    saveMessage() {
      firebase
        .firestore()
        .collection("chat")
        .add({
          message: this.message,
          author: this.authUser.displayName,
          createdAt: new Date().toLocaleTimeString()
        });
      this.message = "";
    },
    fetchMessages() {
      firebase
        .firestore()
        .collection("chat")
        .orderBy("createdAt")
        .onSnapshot(querySnapshot => {
          let allMessages = [];
          querySnapshot.forEach(doc => {
            allMessages.push(doc.data());
          });
          this.messages = allMessages;
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authUser = user;
      } else {
        this.authUser = {};
      }
    });
    this.fetchMessages();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next();
        }
      });
    });
  }
};
</script>

<style>
.kontainer {
  color: white;
}
.time {
  font-size: 10px;
}

.prueba {
  overflow-y: auto;
}
</style>
