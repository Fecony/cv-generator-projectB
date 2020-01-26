export interface UserData {
  email: string
  password: string
}

export interface User {
  username: string
  firstName: string
  lastName: string
  email: string
  token: string
}

export interface AuthState {
  user?: User
  error: string | null
}
