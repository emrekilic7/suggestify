<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'
import { getDetailsWithTitle } from '../http/movie'


const text = ref('')
const data = ref('')

const getDetails = async() => {
  await getDetailsWithTitle(text.value).then(function (response) {
    data.value = response.data
  }).catch(function (error) {
    console.log(error)
  })
}


</script>

<template>
  <main class="container mx-auto p-4 w-full">
    Test
    <input v-model="text" class="input" type="text" placeholder="Send a message." />
    <button class="btn-primary" @click="getDetails"> Send </button>

    <Card v-if="data" :key="data" :details="data" />
  </main>
</template>