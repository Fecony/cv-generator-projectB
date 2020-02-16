import httpClient from '@/api/httpClient'

describe('httpClient.ts', () => {
  it('has responseType set to json', () => {
    expect(httpClient.defaults.responseType).toBe('json')
  })

  it('should have default baseUrl', () => {
    expect(httpClient.defaults.baseURL).toBe('http://localhost:3000')
  })
})
