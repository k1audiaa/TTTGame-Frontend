<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap">
    <div class="landing-page">
      <div class="div">
        <div class="text-wrapper">Let’s</div>
        <div class="text-wrapper-2">TicTacToe</div>
        <button @click="handleButtonClick" class="custom-button">GO!</button>
      </div>
    </div>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const handleButtonClick = () => {
  router.push('/login');
};
</script>


<style scoped>
.landing-page {
  background-color: #151617;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.landing-page .div {
  background-color: #151617;
  height: 832px;
  width: 1280px;
  position: absolute;
}

.landing-page .text-wrapper {
  color: #ffffff;
  font-family: "Source Code Pro-Bold", Helvetica;
  font-size: 60px;
  font-weight: 700;
  left: 100px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 191px;
  width: 1280px;
}

.landing-page .text-wrapper-2 {
  color: #4340d7;
  font-family: "Source Code Pro-Bold", Helvetica;
  font-size: 70px;
  font-weight: 700;
  left: 480px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 305px;
  width: 515px;
}

 .custom-button {
   background-color: #4340d7;
   color: #ffffff;
   font-family: "Press Start 2P", Helvetica ;
   font-size: 50px;
   font-weight: 400;
   padding: 10px 15px;
   cursor: pointer;
   border: none;
   border-radius: 5px;
   left: 600px;
   letter-spacing: 0;
   line-height: normal;
   position: absolute;
   text-align: center;
   top: 500px;
   width: 275px;
   text-decoration: none;
 }

.custom-button:hover {
  background-color: #2d2c8b;
}
</style>


