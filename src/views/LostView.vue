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
    <router-link to="/overview" class="custom-button">Overview</router-link>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: "LostView",
  setup() {
    const points = ref(0);

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

    onMounted(() => {
      fetchPoints();
    });

    return { points };
  },
});
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
}

.custom-button:hover {
  background-color: #2d2c8b;

}
</style>