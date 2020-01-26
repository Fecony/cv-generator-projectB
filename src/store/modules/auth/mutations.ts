import { MutationTree } from 'vuex'
import { AuthState } from './types'

export const mutations: MutationTree<AuthState> = {
  SET_USER(state, user) {
    state.user = user
    state.error = null
  },
  AUTH_ERROR(state, error) {
    state.error = error
    state.error = null
  }
}
