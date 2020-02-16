import { login, register } from '@/api/auth.api'

jest.mock('@/api/httpClient')
import httpClient from '@/api/httpClient'
const mockedAxios = httpClient as jest.Mocked<typeof httpClient>

describe('auth.api.ts', () => {
  it('will login user', async () => {
    const result = { data: { username: 'Test User' } }
    let user = { email: 'test@jest.com', password: '123' }

    mockedAxios.post.mockImplementationOnce(() => Promise.resolve(result))
    await expect(login(user)).resolves.toEqual([result.data])
  })

  it('will fail user login', async () => {
    const error = 'auth:wrong_password'
    let user = { email: 'test@jest.com', password: '1234' }

    mockedAxios.post.mockImplementationOnce(() => Promise.reject(error))
    await expect(login(user)).resolves.toEqual([null, error])
  })

  it('will register user', async () => {
    const result = { data: { ok: true } }
    let user = { email: 'test@jest.com', password: '123' }

    mockedAxios.post.mockImplementationOnce(() => Promise.resolve(result))
    await expect(register(user)).resolves.toEqual([result.data])
  })

  it('will fail registration with missing credentials', async () => {
    const error = 'auth:password_missing'
    let user = { email: 'test@jest.com', password: '' }

    mockedAxios.post.mockImplementationOnce(() => Promise.reject(error))
    await expect(register(user)).resolves.toEqual([null, error])
  })
})
