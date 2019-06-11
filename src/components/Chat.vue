<template>
  <div>
    <v-btn @click="login">Login</v-btn>
    <v-btn @click="sendMessage">Send Message</v-btn>

    <input class="input" type="text" v-model="log">
    <div class="mensajes">
      <h5>{{messages}}</h5>
      <p v-for="message in got" :key="message.id">{{message}}</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      log: [],
      messages: [],
      got: { name: "", mensaje: [] }
    };
  },
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider);
      let name = firebase.auth().currentUser.displayName;
      this.got.name = name;
    },
    sendMessage() {
      firebase
        .database()
        .ref("chat")
        .push(this.log);

      this.log = "";
    },
    saveMessage() {
      firebase
        .database()
        .ref("chat")
        .set(messages);
      console.log(messages);
    },
    getMessage() {
      firebase
        .database()
        .ref("chat")
        .on("value", data => {
          for (let key in data.val()) {
            let element = data.val()[key];

            this.got.mensaje = element;
          }
        });
    }
  },
  created() {
    this.getMessage();
  }
};
</script>

<style>
.input {
  background-color: white;
}
.mensajes {
  background-color: white;
  display: block;
}
</style>
