import api from './open-ai-api.js'

// const systemPrompt = `You are a movie recommendation engine. Users will request recommendations from you by providing certain movie categories and notes about the type of movie they want to watch. Based on these requests, you will provide a total of 2 movie recommendations.

// Return the answer as an Array.
// `

export const completions = (value) => api.post('', {
  'model': 'text-davinci-003',
  // 'messages': [
  //   {
  //     'role': 'system',
  //     content: systemPrompt,
  //   },
  //   {
  //     'role': 'user',
  //     'content': value,
  //   }],
  'prompt': value,
  'temperature': 0.7,
  'max_tokens': 2048,
})