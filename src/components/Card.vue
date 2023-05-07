<script setup>
import { ref } from 'vue'
import { getDetailsWithTitle } from '../http/movie'

const props = defineProps({
  movie: String,
})

const Plot = ref()
const Poster = ref()
const Genre = ref()
const imdbRating = ref()
const imdbID = ref()

getDetailsWithTitle(props.movie).then(function (response) {
  Plot.value = response.data.Plot
  Poster.value = response.data.Poster
  Genre.value = response.data.Genre
  imdbRating.value = response.data.imdbRating
  imdbID.value = response.data.imdbID
}).catch(function (error) {
  console.log(error)
})
</script>

<template>
  <div class="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
    <div>
      <img :src="`${Poster}`" class="w-full h-96 object-cover" alt="" />
    </div>
    <div class="absolute inset-0 z-10 bg-gradient-to-t from-black" />
    <div class="absolute inset-x-0 bottom-0 z-20 p-4">
      <p class="mb-1 text-sm text-white text-opacity-80">{{ Genre }} • <time>{{ imdbRating }}</time></p>
      <h3 class="text-xl font-medium text-white">{{ props.movie }}</h3>
      <p class="mt-1 text-white text-opacity-80">{{ Plot }}</p>
    </div>
  </div>
</template>