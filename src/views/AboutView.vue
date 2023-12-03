<template>
  <h1>Welcome to TTTGame!</h1>
</template>

<script>
export default {
  name: 'AboutView',
  mounted() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
      }

    fetch('http://localhost:8081/api/users', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>



<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
