<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap">
  <div class="div">
    <div class="text1">Wait... login first</div>
    <div class="login">
      <span>What is your  </span>
      <span class="username">username</span>
      <span>?</span>
    </div>
    <div class="input-container">
      <input v-model="firstInput" placeholder="Type your username" class="input-field" />
      <input v-model="secondInput" placeholder="Set your password" class="input-field" />
    </div>
    <router-link to="/overview" class="custom-button">Let's TTT</router-link>
  </div>
</template>


<style scoped>

.username {
  color: #4441d8;
}

.login {
  font-family: "Press Start 2P", Helvetica;
  font-size: 30px;
  color: #fff;
  position: absolute;
  top: 280px;
  left: 400px;
}
.text1 {
  font-family: "Press Start 2P", Helvetica;
  color: #fff;
  position: absolute;
  top: 180px;
  left: 370px;
  font-size: 40px;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-top: 400px;
  margin-left: 500px;
  margin-right: 500px;
}

.input-field {
  padding: 25px;
  margin-bottom: 30px;
  font-family: "Press Start 2P", Helvetica;
  font-size: 15px;
  text-align: center;
  border-radius: 5px;
}

.custom-button {
  background-color: #4340d7;
  color: #ffffff;
  font-family: "Press Start 2P", Helvetica ;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 15px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 630px;
  left: 570px;
  width: 275px;
  text-decoration: none;
}

.custom-button:hover {
  background-color: #2d2c8b;
}

</style>