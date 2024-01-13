<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap">
  <div class="overview">
    <div class="div">
      <div class="hello">Hello</div>
      <div class="username">{{ username }}</div>
      <div class="overlap-group1">
        <div class="score">Score</div>
        <div class="points">{{ points }}</div>
      </div>
      <div class="overlap-group2">
        <div class="level">Level</div>
        <div class="level2">{{ level }}</div>
      </div>
      <router-link to="/game" class="custom-button">PLAY</router-link>
      <LogOutButton />
    </div>
  </div>
</template>


<script setup lang="ts">
import LogOutButton from '../components/LogOutButton.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const username = ref('[User]');
const points = ref(100);
const level = ref(1);

const fetchUserData = async () => {
  try {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      username.value = storedUsername;
    } else {
      console.error('Username not found in Local Storage.');
      return;
    }

    // Retrieve user ID from local storage
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in Local Storage.');
      return;
    }

    // Fetch user data using user ID
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const endpoint = `${baseUrl}/api/users/${userId}`;

    const response = await axios.get(endpoint);

    if (response.status === 200 && response.data) {
      const user = response.data;

      points.value = user.points;
      level.value = user.level;
    } else {
      console.error('Unexpected response:', response.status);
    }
  } catch (error) {
    console.error("Error during user data fetching:", error);
  }
};

onMounted(() => {
  console.log('Component is mounted, fetching user data...');
  fetchUserData();
});
</script>



<style scoped>
.overview {
  background-color: #151617;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.overview .div {
  background-color: #151617;
  height: 832px;
  width: 1280px;
  position: absolute;
}

.overview .hello {
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica;
  font-size: 50px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 160px;
  left: 420px;
}

.overview .username {
  color: #4340d7;
  font-family: "Press Start 2P", Helvetica;
  font-size: 50px;
  font-weight: 500;
  left: 780px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 160px;
  white-space: nowrap;
}

.overview .overlap-group1 {
  background-color: #4340d7;
  border-radius: 5px;
  height: 234px;
  left: 370px;
  top: 290px;
  width: 334px;
  position: absolute;
}

.overview .score {
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica;
  font-size: 30px;
  font-weight: 600;
  left: 90px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  white-space: nowrap;
}

.overview .points {
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica;
  font-size: 30px;
  font-weight: 400;
  left: 120px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 138px;
  white-space: nowrap;
}

.overlap-group2 {
  background-color: #4340d7;
  border-radius: 5px;
  height: 234px;
  left: 740px;
  top: 290px;
  width: 334px;
  position: absolute;
}

.overview .level {
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica;
  font-size: 30px;
  font-weight: 600;
  left: 90px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  white-space: nowrap;
}

.overview .level2 {
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica;
  font-size: 30px;
  font-weight: 400;
  left: 155px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 138px;
  white-space: nowrap;
}

.custom-button {
  background-color: #4340d7;
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica ;
  font-size: 25px;
  font-weight: 600;
  padding: 20px 15px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 600px;
  left: 570px;
  width: 275px;
  text-decoration: none;
}

.custom-button:hover {
  background-color: #2d2c8b;
}
</style>