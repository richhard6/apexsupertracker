<template>
  <div class="login">
    <h3>Please Login with your Google Account to continue</h3>

    <button @click="login">Login with Google</button>
    <router-link to="/chatcloud">
      <button>Go to the chat!!!</button>
    </router-link>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          this.$router.push("/chatcloud");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
    }
  }
};
</script>

<style>
.login {
  background-color: white;
}
</style>
