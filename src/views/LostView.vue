<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap">
  <div class="div">
    <div class="gameLost">
      <span>GAME </span>
      <span class="lost">LOST</span>
      <span>!</span>
    </div>
    <div class="yourScore">Your score:</div>
    <div class="points">{{ points }}</div>
    <router-link to="/overview" class="custom-button" @click="playOverviewSound">Overview</router-link>
    <LogOutButton />
  </div>
</template>


<script setup lang="ts">
import LogOutButton from '../components/LogOutButton.vue';
import { ref, onMounted } from 'vue';
import LostSound from '@/assets/GameLost.mp3';
import OverviewSound from '@/assets/GameLoginSuccess.mp3';

const points = ref(0);

const playSuccessSound = () => {
  new Audio(LostSound).play();
};

const fetchPoints = async () => {
  try {
    const storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      console.error('User ID not found in Local Storage.');
      return;
    }

    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const endpoint = `${baseUrl}/api/users/${storedUserId}`;
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(endpoint, requestOptions);
    const user = await response.json();

    points.value = user.points;

    playSuccessSound();
  } catch (error) {
    console.error("Error fetching points:", error);
  }
};

onMounted(() => {
  fetchPoints();
});

const playOverviewSound = () => {
  new Audio(OverviewSound).play();
};
</script>


<style scoped>
.lost {
  color: #4441d8;
}

.gameLost {
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
  left: 540px;
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
  left: 570px;
  width: 275px;
  text-decoration: none;
}

.custom-button:hover {
  background-color: #2d2c8b;

}
</style>