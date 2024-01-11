<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P" />
  <div class="status">
    <span class="user">{{ currentPlayer }}</span>
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
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

const cells = reactive(Array(9).fill(''));
const username = ref("[User]");
const points = ref(0);

const router = useRouter();

const currentPlayer = ref(username.value);

const cellClicked = (index) => {
  if (cells[index] === '' && !isGameFinished() && currentPlayer.value === username.value) {
    cells[index] = 'X';
    currentPlayer.value = "GamingAI"; // Computer's turn
    if (!isGameFinished()) {
      setTimeout(() => {
        computerMove();
        currentPlayer.value = username.value; // User's turn
      }, 3000);
    }
  }
};

const isGameFinished = () => {
  if (checkWin('X')) {
    points.value += 10;
    setTimeout(() => router.push('/win'), 1000);
    return true;
  } else if (checkWin('O')) {
    points.value -= 10;
    setTimeout(() => router.push('/lost'), 1000);
    return true;
  } else if (isBoardFull()) {
    setTimeout(() => router.push('/draw'), 1000);
    return true;
  }
  return false;
};

const checkWin = (symbol) => {
  // Check rows, columns, and diagonals for a win
  for (let i = 0; i < 3; i++) {
    if (
        (cells[i * 3] === symbol && cells[i * 3 + 1] === symbol && cells[i * 3 + 2] === symbol) ||
        (cells[i] === symbol && cells[i + 3] === symbol && cells[i + 6] === symbol)
    ) {
      return true;
    }
  }

  if (
      (cells[0] === symbol && cells[4] === symbol && cells[8] === symbol) ||
      (cells[2] === symbol && cells[4] === symbol && cells[6] === symbol)
  ) {
    return true;
  }

  return false;
};

const isBoardFull = () => {
  return cells.every((cell) => cell !== '');
};

const computerMove = () => {
  // 1. Check for a winning move
  const winningMove = getWinningMove('O');
  if (winningMove !== -1) {
    cells[winningMove] = 'O';
    isGameFinished();
    return;
  }

  // 2. Block the user from winning
  const blockingMove = getWinningMove('X');
  if (blockingMove !== -1) {
    cells[blockingMove] = 'O';
    isGameFinished();
    return;
  }

  // 3. Take the center if available
  if (cells[4] === '') {
    cells[4] = 'O';
    isGameFinished();
    return;
  }

  // 4. Take a corner if available
  const availableCorners = [0, 2, 6, 8].filter((index) => cells[index] === '');
  if (availableCorners.length > 0) {
    const randomCorner = availableCorners[Math.floor(Math.random() * availableCorners.length)];
    cells[randomCorner] = 'O';
    isGameFinished();
    return;
  }

  // If no strategic move is available, make a random move
  const emptyCells = cells.map((cell, index) => (cell === '' ? index : -1)).filter((index) => index !== -1);
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const computerIndex = emptyCells[randomIndex];

  cells[computerIndex] = 'O';

  isGameFinished();
};

const getWinningMove = (symbol) => {
  // Check for a winning move in rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    if (
        (cells[i * 3] === symbol && cells[i * 3 + 1] === symbol && cells[i * 3 + 2] === '') ||
        (cells[i * 3] === symbol && cells[i * 3 + 2] === symbol && cells[i * 3 + 1] === '') ||
        (cells[i * 3 + 1] === symbol && cells[i * 3 + 2] === symbol && cells[i * 3] === '')
    ) {
      return i * 3 + (cells[i * 3] === '' ? 0 : cells[i * 3 + 1] === '' ? 1 : 2);
    }

    if (
        (cells[i] === symbol && cells[i + 3] === symbol && cells[i + 6] === '') ||
        (cells[i] === symbol && cells[i + 6] === symbol && cells[i + 3] === '') ||
        (cells[i + 3] === symbol && cells[i + 6] === symbol && cells[i] === '')
    ) {
      return i + (cells[i] === '' ? 0 : cells[i + 3] === '' ? 3 : 6);
    }
  }

  if (
      (cells[0] === symbol && cells[4] === symbol && cells[8] === '') ||
      (cells[0] === symbol && cells[8] === symbol && cells[4] === '') ||
      (cells[4] === symbol && cells[8] === symbol && cells[0] === '')
  ) {
    return cells[0] === '' ? 0 : cells[4] === '' ? 4 : 8;
  }

  if (
      (cells[2] === symbol && cells[4] === symbol && cells[6] === '') ||
      (cells[2] === symbol && cells[6] === symbol && cells[4] === '') ||
      (cells[4] === symbol && cells[6] === symbol && cells[2] === '')
  ) {
    return cells[2] === '' ? 2 : cells[4] === '' ? 4 : 6;
  }

  return -1; // No winning move
};

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
    currentPlayer.value = username.value; // Set currentPlayer initially
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
  font-size: 50px;
  cursor: pointer;
  font-family: "Press Start 2P", Helvetica;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cell:hover {
  background-color: #4340d7;
  color: #ffffff;
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
