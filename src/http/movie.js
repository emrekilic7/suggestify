import axios from 'axios'

export const getDetailsWithTitle = (value) => axios.get(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${value}`)