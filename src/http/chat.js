import api from './open-ai-api.js'

export const completions = (value) => api.post('', {
  'model': 'text-davinci-003',
  'prompt': value,
  'temperature': 0.7,
  'max_tokens': 2048,
})