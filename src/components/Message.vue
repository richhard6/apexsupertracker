<template>
  <div class="message">
    <b>{{message.name}}</b>
    <b>[{{message.date}}]</b> :
    <b>{{message.message}}</b>
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style>
.message {
  background-color: white;
  margin: auto;
  margin-bottom: 10px;
  width: 500px;
}
</style>