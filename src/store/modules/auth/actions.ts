import { ActionTree } from 'vuex'
import { login, register } from '@/api/auth.api'
import { AuthState, UserData } from './types'
import { RootState } from '../types'

export const actions: ActionTree<AuthState, RootState> = {
  async login({ commit }, payload: UserData) {
    try {
      const response = await login(payload)
      commit('SET_USER', response)
    } catch (error) {
      console.log(`Login error: ${error}`)
      commit('AUTH_ERROR', error)
    }
  },
  async register({ commit }, payload: UserData) {
    try {
      const response = await register(payload)
      commit('SET_USER', response)
    } catch (error) {
      console.log(`Registration error: ${error}`)
      commit('AUTH_ERROR', error)
    }
  }
}
