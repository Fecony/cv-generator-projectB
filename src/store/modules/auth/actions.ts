import { ActionTree } from 'vuex'
import { login, register } from '@/api/auth.api'
import { AuthState, FormData } from './types'
import { RootState } from '../types'

export const actions: ActionTree<AuthState, RootState> = {
  async login({ commit }, formData: FormData) {
    const [res, error] = await login(formData)

    if (error) {
      return { status: error }
    } else {
      commit('SET_TOKEN', res.token)
      commit('SET_USER', res.user)
      return { status: 'success' }
    }
  },
  async register({ commit }, formData: FormData) {
    const [res, error] = await register(formData)

    if (error) {
      return { status: error }
    } else {
      commit('SET_TOKEN', res.token)
      commit('SET_USER', res.user)
      return { status: 'success' }
    }
  }
}
