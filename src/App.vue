<script setup lang="ts">
</script>

<template>
  <router-view />
  <div class="logo-title">
    <h1>TTTgame</h1>
  </div>
  <router-link to="/" class="logout-button">Log Out</router-link>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  background-color: #151617;
  width: 100%;
}

.logo-title {
  color: #4340d7;
  font-size: 15px;
  font-family: "Press Start 2P", Helvetica;
  top: 20px;
  left: 25px;
  position: absolute;
}

.logout-button {
  background-color: #4340d7;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-family: "Press Start 2P", Helvetica;
  font-size: 15px;
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.logout-button:hover {
  background-color: #2d2c8b;
}
</style>
