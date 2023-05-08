<script setup>
import { ref, reactive} from 'vue'
import genres from '../http/genres.json'
import { completions } from '../http/chat'
import Card from '../components/Card.vue'

const BTN_TEXT = 'Explore 🚀'
const btnText = ref(BTN_TEXT)
const movies = ref([])
const scroolToBottom = ref(null)
const activeMap = reactive({})
const additions = ref()

const askAi = async() => {
  let additionText = additions.value ? `Make sure it fits the following description as well: ${additions.value}. ` : ''

  let text = `Give me a list of 3 movie recommendations that fit all of the following categories: ${JSON.stringify(Object.keys(activeMap).filter(key => activeMap[key] === true)).replace('[', '').replace(']', '').replace(/['"]+/g, '')}. ${additionText}If you do not have 3 recommendations that fit these criteria perfectly, do your best to suggest other movies that I might like. Please return this response as an array with only movies title! Make sure the answer is only in array type. Do NOT add into your answer anything else other than the array!`

  btnText.value = 'Hmm... 🤔'
  await completions(text).then(function (response) {
    movies.value = JSON.parse(response.data.choices[0].text)
  }).catch(function (error) {
    console.log(error)
  }).finally(() => {
    btnText.value = BTN_TEXT
  })

  setTimeout(() => scroolToBottom.value?.scrollIntoView({behavior: 'smooth'}), 100)
  text = ''
  additionText = ''
}
const toggleAccordion = (data) => {
  activeMap[data] = !activeMap[data]
}
</script>

<template>
  <main class="container mx-auto p-4 w-full">
    <section class="px-4 pt-32 pb-16 mx-auto max-w-7xl">
      <div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
        <h1 class="mb-3 text-4xl font-bold text-[#4C1D95] md:text-5xl md:leading-tight md:font-extrabold">Explore, watch, repeat.</h1>
        <p class="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
          Welcome to our film recommendation app, powered by state-of-the-art AI technology. With our innovative approach, we're redefining the way you discover and experience movies.
        </p>
        <div class="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8">
          <div class="btn-list">
            <button
              v-for="(data) in genres.genres"
              :key="data.id"
              class="text-[#4C1D95] btn btn-light "
              :class="{ 'active': !!activeMap[data.name] }"
              @click="() => toggleAccordion(data.name)"
            >
              {{ data.name }}
            </button>
          </div>
          <label class="col-auto lg:col-span-4 my-3">
            <span class="sr-only">Your Input</span>
            <input v-model="additions" class="mt-0 form-input form-input-lg" placeholder="The additions you wanted to make... (Optional)" />
          </label>
          <button class="w-full col-auto btn btn-purple text-[#4C1D95] btn-lg lg:col-span-4" @click="askAi">{{ btnText }}</button>
        </div>
      </div>
    </section>

    <div ref="scroolToBottom" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full"> 
      <Card v-for="movie in movies" :key="movie" :movie="movie" />
    </div>
  </main>
</template>