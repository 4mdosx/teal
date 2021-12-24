import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 3000,
})

request.interceptors.request.use(
  function (config) {
    const authorization = window.localStorage.getItem('authorization')
    if (authorization) config.headers.authorization = authorization
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
