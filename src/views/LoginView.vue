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
      <input v-model="username" placeholder="Type your username" class="input-field" />
    </div>
    <button @click="login" class="custom-button">Let's TTT</button>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  points: number;
  level: number;
}

const username = ref('');
const points = ref(100);
const level = ref(1);
const router = useRouter();

const login = async () => {
  try {
    if (!username.value) {
      console.error('Username is required.');
      return;
    }

    if (/\d/.test(username.value)) {
      console.error('Username cannot contain numbers.');
      return;
    }

    const baseUrl: string = import.meta.env.VITE_BACKEND_BASE_URL;
    const userExistEndpoint: string = `${baseUrl}/api/users/exists?username=${username.value}`;
    const userEndpoint: string = `${baseUrl}/api/users`;

    // Check if user already exists
    const userExistResponse = await axios.get(userExistEndpoint);

    if (userExistResponse.data.exists) {
      // User exists, fetch user data
      const userResponse = await axios.get<User>(`${userEndpoint}/${userExistResponse.data.userId}`);

      if (userResponse.status === 200) {
        const user = userResponse.data;
        console.log('User logged in successfully');
        localStorage.setItem('username', user.username);
        localStorage.setItem('userId', user.id.toString());
        points.value = user.points;
        level.value = user.level;
        await router.push('/overview');
      } else {
        console.error('Unexpected response:', userResponse.status);
      }
    } else {
      // User does not exist, create a new user
      const newUserResponse = await axios.post<User>(userEndpoint, {
        username: username.value,
        points: points.value,
        level: level.value,
      });

      if (newUserResponse.status === 201) {
        console.log('New user created successfully');
        localStorage.setItem('username', newUserResponse.data.username);
        localStorage.setItem('userId', newUserResponse.data.id.toString());
        await router.push('/overview');
      } else {
        console.error('Unexpected response:', newUserResponse.status);
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};


</script>




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
  margin-top: 420px;
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
  top: 600px;
  left: 570px;
  width: 275px;
  text-decoration: none;
}

.custom-button:hover {
  background-color: #2d2c8b;
}

</style>