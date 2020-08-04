import axios from 'axios'
import env from '../../../main/config/env'

const apiUrl = env.apiUrl

const httpClient = axios.create({
  baseURL: apiUrl
})

export default httpClient
