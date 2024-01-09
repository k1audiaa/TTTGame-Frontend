
<style>
body, html {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap">
  <div class="overview">
    <div class="div">
      <div class="overlap-group">
        <div class="text-wrapper">Score</div>
        <div class="text-wrapper-2">[Integer]</div>
      </div>
      <div class="web-banner" />
      <p class="hello-user">
        <span class="span">Hello </span>
        <span class="text-wrapper-3">[User]</span>
      </p>
      <div class="overlap">
        <router-link to="/overview" class="custom-button">PLAY</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverView",
};
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
}
.overview {
  background-color: #151617;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.overview .div {
  background-color: #151617;
  height: 832px;
  position: relative;
  width: 1280px;
}

.overview .overlap-group {
  background-color: #4340d7;
  height: 234px;
  left: 473px;
  position: absolute;
  top: 299px;
  width: 334px;
}

.overview .text-wrapper {
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica;
  font-size: 40px;
  font-weight: 400;
  left: 67px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  white-space: nowrap;
}

.overview .text-wrapper-2 {
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica;
  font-size: 30px;
  font-weight: 400;
  left: 29px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 138px;
  white-space: nowrap;
}


.overview .hello-user {
  color: transparent;
  font-family: "Source Code Pro-Bold", Helvetica;
  font-size: 55px;
  font-weight: 700;
  left: 442px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 169px;
}

.overview .span {
  color: #ffffff;
  font-family: "Source Code Pro-Bold", Helvetica;
}

.overview .text-wrapper-3 {
  color: #4340d7;
}

.overview .overlap {
  background-size: 100% 100%;
  height: 82px;
  left: 422px;
  position: absolute;
  top: 629px;
  width: 433px;
}
.custom-button {
  background-color: #4340d7;
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica;
  font-size: 50px;
  font-weight: 400;
  height: 82px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 433px;
}
.overview .text-wrapper-4 {
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica;
  font-size: 50px;
  font-weight: 400;
  left: 80px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 15px;
  width: 275px;
}
</style>
