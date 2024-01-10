<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P" />
  <div class="status">
    <span class="user">{{ username }}</span>
    <span>, it's your turn!</span>
  </div>
  <div class="board">
    <div
        v-for="(cell, index) in cells"
        :key="index"
        @click="cellClicked(index)"
        class="cell"
    >
      {{ cell }}
    </div>
    <router-link to="/overview" class="custom-button">Exit Game</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cells = ref(Array(9).fill(''));

const cellClicked = (index) => {

};

const username = ref("[User]");

const fetchUsername = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const endpoint = `${baseUrl}/api/users/2`;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(endpoint, requestOptions);
    const user = await response.json();

    username.value = user.username;
  } catch (error) {
    console.log("error", error);
  }
};

onMounted(() => {
  fetchUsername();
});
</script>

<style scoped>
.status {
  font-family: "Press Start 2P", Helvetica;
  font-size: 35px;
  color: #fff;
  position: absolute;
  top: 150px;
  left: 360px;
}

.user {
  color: #4340d7;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  margin: auto;
  width: 150px;
}

.cell {
  width: 90px;
  height: 90px;
  color: #4340d7;
  box-shadow: 0 0 0 2px;
  line-height: 100px;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cell:hover {
  background-color: #4340d7;
}

.custom-button {
  background-color: #4340d7;
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica ;
  font-size: 15px;
  font-weight: 600;
  padding: 20px 15px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 650px;
  left: 575px;
  width: 275px;
}

.custom-button:hover {
  background-color: #2d2c8b;
}
</style>
