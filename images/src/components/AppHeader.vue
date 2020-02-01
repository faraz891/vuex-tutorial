<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"; // Import a helper from vuex. mapActions is a function that will automagically connect different actions that we have created inside of our modules to a component

export default {
  name: "AppHeader",
  methods: mapActions(["login"])
};
</script>