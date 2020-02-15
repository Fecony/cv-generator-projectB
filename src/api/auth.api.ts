import httpClient from './httpClient'
import { FormData } from '@/store/modules/auth/types'

const AUTH_ENDPOINT = '/auth'

const login = async (userData: FormData) => {
  return await httpClient
    .post(`${AUTH_ENDPOINT}/login`, userData)
    .then(res => [res.data])
    .catch(error => [null, error])
}

const register = async (userData: FormData) => {
  return await httpClient
    .post(`${AUTH_ENDPOINT}/register`, userData)
    .then(res => [res.data])
    .catch(error => [null, error])
}

export { login, register }
