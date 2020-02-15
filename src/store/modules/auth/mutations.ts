import { MutationTree } from 'vuex'
import { AuthState } from './types'

export const mutations: MutationTree<AuthState> = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
  }
}
