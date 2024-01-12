<template>
  <router-link to="/" class="logout-button">Log Out</router-link>
</template>

<script>
export default {
  name: 'LogOutButton'
}
</script>

<style scoped>
.logout-button {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #4340d7;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-family: "Press Start 2P", Helvetica;
  font-size: 15px;
  margin: 10px;
  padding: 10px;
  text-decoration: none;
}

.logout-button:hover {
  background-color: #2d2c8b;
}
</style>
