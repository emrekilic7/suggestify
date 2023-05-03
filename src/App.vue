<script setup>
import { ref } from 'vue'
import { completions } from './http/chat'

const text = ref('')
const res = ref('✅ The answer will be displayed here.')
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
  <input v-model="text" type="text" placeholder="Send a message." />
  <button @click="askAi"> {{ btnText }} </button>
  <hr />
  {{ res }}
</template>