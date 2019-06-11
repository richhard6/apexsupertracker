<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container class="kontainer" fluid>
        <input v-model="message" @keyup.enter="saveMessage" type="text">
        <div v-for="message in messages" :key="message.id">
          {{message.message}}
          <span class="time">{{message.createdAt}} {{message.author}}</span>
        </div>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      message: null,
      messages: [],
      authUser: {}
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
  background-color: white;
}
.time {
  font-size: 10px;
}
</style>
