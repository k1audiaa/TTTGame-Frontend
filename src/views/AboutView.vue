<template>
  <h1>Welcome to TTTGame!</h1>
</template>


<script>

export default {
  name: 'AboutView',
  mounted() {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const endpoint = `${baseUrl}/api/users`
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
      }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(user => console.log(user)))
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
