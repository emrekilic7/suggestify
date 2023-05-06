import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
    'OpenAI-Organization': import.meta.env. VITE_ORG_ID,
  },
})

export default api