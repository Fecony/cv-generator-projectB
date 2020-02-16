import store from '@/store'
import { Store } from 'vuex'

describe('store/index.ts', () => {
  it('should be Vuex store instance', () => {
    expect(store).toBeInstanceOf(Store)
  })
})
