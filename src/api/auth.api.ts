import httpClient from './httpClient'
import { UserData } from '@/store/modules/auth/types'

const AUTH_ENDPOINT = '/auth'

const login = (userData: UserData) => {
  return httpClient.post(`${AUTH_ENDPOINT}/login`, userData)
}

const register = (userData: UserData) => {
  return httpClient.post(`${AUTH_ENDPOINT}/register`, userData)
}

export { login, register }
