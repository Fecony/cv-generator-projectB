export interface FormData {
  email: string
  password: string
}

export interface User {
  username: string
  firstName: string
  lastName: string
  email: string
}

export interface AuthState {
  user?: User
  token: string
}
