import axios from 'axios'

const APIClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1'
})

export default APIClient
