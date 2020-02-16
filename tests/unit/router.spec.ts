import router from '@/router'
import VueRouter from 'vue-router'

describe('router/index.ts', () => {
  it('mode is set to history', () => {
    expect(router.mode).toBe('history')
  })

  it('should be instance of VueRouter', () => {
    expect(router).toBeInstanceOf(VueRouter)
  })
})
