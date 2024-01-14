<script setup lang="ts">
</script>

<template>
  <router-view />
  <div class="logo-title">
    <h1>TTTgame</h1>
  </div>
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
</style>
