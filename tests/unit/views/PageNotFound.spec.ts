import { mount } from '@vue/test-utils'
import PageNotFound from '@/views/PageNotFound.vue'

describe('PageNotFound.vue', () => {
  const wrapper = mount(PageNotFound)

  it('is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains h1 with 404"', () => {
    expect(wrapper.find('h1').text()).toBe('404')
  })
})
