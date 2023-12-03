<template>
  <h1>Welcome to TTTGame</h1>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="user in users" :key="user.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ user.username }}</h5>
            <p class="card-text">
              Welcome {{ user.username }}!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('http://localhost:8081/api/users', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
