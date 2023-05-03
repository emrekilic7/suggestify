<script setup>
import { ref } from 'vue'
import { completions } from '../http/chat'

const text = ref('')
const res = ref('The answer will be displayed here...')
const BTN_TEXT = 'Submit 🚀'
const btnText = ref(BTN_TEXT)

const askAi = async() => {
  btnText.value = 'Thinking...🤔'
  await completions(text.value).then(function (response) {
    console.log(response)
    res.value =  response.data.choices[0].message.content
  }).catch(function (error) {
    console.log(error)
  }).finally(() => {
    btnText.value = BTN_TEXT
  })
}
</script>

<template>
  <section>
    <div class="border border-gray-200 rounded-md p-4 shadow-sm flex justify-between items-center">
      <div class="flex-1">
        <input v-model="text" class="input" type="text" placeholder="Send a message." />
      </div>
      <div class="ml-2">
        <button class="btn-primary" @click="askAi"> {{ btnText }} </button>
      </div>
    </div>
  </section>

  <div class="border border-gray-200 rounded-md p-4 shadow-sm mt-4">
    {{ res }}
  </div>
</template>