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

// getDetailsWithTitle(props.movie).then(function (response) {
//   Plot.value = response.data.Plot
//   Poster.value = response.data.Poster
//   Genre.value = response.data.Genre
//   imdbRating.value = response.data.imdbRating
//   imdbID.value = response.data.imdbID
// }).catch(function (error) {
//   console.log(error)
// })

const response = {
  'Title': 'The Italian Job',
  'Year': '2003',
  'Rated': 'PG-13',
  'Released': '30 May 2003',
  'Runtime': '111 min',
  'Genre': 'Action, Crime, Thriller',
  'Director': 'F. Gary Gray',
  'Writer': 'Troy Kennedy-Martin, Donna Powers, Wayne Powers',
  'Actors': 'Donald Sutherland, Mark Wahlberg, Edward Norton',
  'Plot': 'After being betrayed and left for dead in Italy, Charlie Croker and his team plan an elaborate gold heist against their former ally.',
  'Language': 'English, Russian, Italian',
  'Country': 'United States, France, Italy, United Kingdom, Germany',
  'Awards': '7 wins & 9 nominations',
  'Poster': 'https://m.media-amazon.com/images/M/MV5BNDYyNzYxNjYtNmYzMC00MTE0LWIwMmYtNTAyZDBjYTIxMTRhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  'Ratings': [
    {
      'Source': 'Internet Movie Database',
      'Value': '7.0/10',
    },
    {
      'Source': 'Rotten Tomatoes',
      'Value': '72%',
    },
    {
      'Source': 'Metacritic',
      'Value': '68/100',
    },
  ],
  'Metascore': '68',
  'imdbRating': '7.0',
  'imdbVotes': '375,964',
  'imdbID': 'tt0317740',
  'Type': 'movie',
  'DVD': '21 Oct 2003',
  'BoxOffice': '$106,128,601',
  'Production': 'N/A',
  'Website': 'N/A',
  'Response': 'True',
}

Plot.value = response.Plot
Poster.value = response.Poster
Genre.value = response.Genre
imdbRating.value = response.imdbRating
imdbID.value = response.imdbID
</script>

<template>
  <div class="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
    <div>
      <img :src="`${Poster}`" class="w-full h-96 object-cover" alt="" />
    </div>
    <div class="absolute inset-0 z-10 bg-gradient-to-t from-black" />
    <div class="absolute inset-x-0 bottom-0 z-20 p-4">
      <p class="mb-1 text-sm text-white text-opacity-80">{{ Genre }} • <time>{{ imdbRating }}</time></p>
      <a :href="`https://www.imdb.com/title/${imdbID}`" target="_blank"><h3 class="text-xl font-medium text-white">{{ props.movie }}</h3></a>
      <p class="mt-1 text-white text-opacity-80">{{ Plot }}</p>
    </div>
  </div>
</template>