import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:3000', // API server
  timeout: 1000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

const httpClient: AxiosInstance = axios.create(axiosConfig)

const getAuthToken = () => localStorage.getItem('cv_gen:token')

const authInterceptor = (config: AxiosRequestConfig) => {
  config.headers['Authorization'] = getAuthToken()
  return config
}

httpClient.interceptors.request.use(authInterceptor)

export default httpClient
