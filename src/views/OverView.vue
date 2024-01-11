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
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: "Overview",
  setup() {
    const username = ref("[User]");
    const points = ref(0);
    const level = ref(1);

    const fetchUsername = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
        const endpoint = `${baseUrl}/api/users/9`;
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

    const fetchPoints = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
        const endpoint = `${baseUrl}/api/users/9`;
        const requestOptions = {
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

    const fetchLevel = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
        const endpoint = `${baseUrl}/api/users/9`;
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const response = await fetch(endpoint, requestOptions);
        const user = await response.json();

        level.value = user.level;
      } catch (error) {
        console.log("error", error);
      }
    };

    onMounted(() => {
      fetchUsername();
      fetchPoints();
      fetchLevel();
    });

    return { username, points, level };
  },
});
</script>


<style scoped>
.overview {
  background-color: #151617;
  display: flex;
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
  left: 330px;
}

.overview .username {
  color: #4340d7;
  font-family: "Press Start 2P", Helvetica;
  font-size: 50px;
  font-weight: 500;
  left: 660px;
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
  left: 280px;
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
  left: 650px;
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
  left: 500px;
  width: 275px;
}

.custom-button:hover {
  background-color: #2d2c8b;
}
</style>