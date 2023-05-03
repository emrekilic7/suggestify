// import axios from "axios"

// const http = axios.create({
// baseURL: 'https://api.openai.com/v1/chat',
// headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
//     'OpenAI-Organization': import.meta.env. VITE_ORG_ID,
// }
// });

// http.post('/completions', {
//     "model": "gpt-3.5-turbo",
//     "messages": [{"role": "user", "content": content.value}],
//     "temperature": 0.7
//   }).then(function (response) {
//   console.log(response);
//   res.value =  response.data.choices[0].message.content
// }).catch(function (error) {
//   console.log(error);
// }).finally(() => {
//   btnText.value = BTN_TEXT
// })

import axios from 'axios'
// axios.defaults.withCredentials = true

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
    'OpenAI-Organization': import.meta.env. VITE_ORG_ID,
  },
})

export default api