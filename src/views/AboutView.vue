<template>
  <div class="about">
    <div class="text-wrapper">Overview Page!</div>
  </div>
</template>


<script>
/*
import {ref, onMounted} from 'vue'
import type {Ref} from 'vue'
defineProps<{
  title: string
}>()
type User = { id?: number, username: string, points: number }
const items: Ref<User[]> = ref([])

function loadUsers () {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL
  const endpoint = baseUrl + '/api/users'
  const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  }
  fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach((user: User) => {
        items.value.push(user)
      }))
      .catch(error => console.log('error', error))
}
// Lifecycle hooks
onMounted(() => {
  loadUsers()
})
*/

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
body, html {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
