import axios from 'axios'
import env from '../config/env'

const apiUrl = env.apiUrl

const api = axios.create({
  baseUrl: apiUrl
})

export default api
