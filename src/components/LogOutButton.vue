<template>
  <button @click="logout" class="logout-button">Log Out</button>
</template>

<script setup lang="ts">
import router from "@/router";

const logout = () => {
  // Clear stored user ID from localStorage
  localStorage.removeItem('userId');

  // You can also clear other user-related data if needed
  localStorage.removeItem('username');
  localStorage.removeItem('points');
  localStorage.removeItem('level');

  router.push('/');
  console.log("User logged out successfully");
};
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
