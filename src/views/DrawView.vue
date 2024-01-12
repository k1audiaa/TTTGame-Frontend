<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap">
  <div class="div">
    <div class="gameDraw">
      <span>GAME </span>
      <span class="draw">DRAW</span>
      <span>!</span>
    </div>
    <div class="yourScore">Your score:</div>
    <div class="points">{{ points }}</div>
    <router-link to="/overview" class="custom-button">Overview</router-link>
    <router-link to="/game" class="custom-button2">Rematch</router-link>
    <LogOutButton />
  </div>
</template>


<script setup lang="ts">
import LogOutButton from '../components/LogOutButton.vue';
import { ref, onMounted } from 'vue';

const points = ref(0);

const fetchPoints = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const endpoint = `${baseUrl}/api/users/9`;
    const requestOptions:RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(endpoint, requestOptions);
    const user = await response.json();

    points.value = user.points;
  } catch (error) {
    console.log("error", error);
  }
};

onMounted(() => {
  fetchPoints();
});
</script>


<style scoped>

.draw {
  color: #4441d8;
}
.gameDraw {
  font-family: "Press Start 2P", Helvetica;
  font-size: 55px;
  color: #fff;
  position: absolute;
  top: 150px;
  left: 470px;
}
.yourScore {
  font-family: "Press Start 2P", Helvetica;
  color: #fff;
  position: absolute;
  top: 320px;
  left: 550px;
  font-size: 35px;
}

.points {
  font-family: "Press Start 2P", Helvetica;
  position: absolute;
  top: 400px;
  left: 660px;
  font-size: 40px;
  color: #4441d8;
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
  top: 550px;
  left: 580px;
  width: 275px;
  text-decoration: none;
}

.custom-button:hover {
  background-color: #2d2c8b;

}

.custom-button2 {
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
  left: 580px;
  width: 275px;
  text-decoration: none;
}

.custom-button2:hover {
  background-color: #2d2c8b;
}
</style>