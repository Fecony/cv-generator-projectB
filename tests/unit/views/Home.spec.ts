import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  const wrapper = mount(Home)

  it('is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains h1 with Home text"', () => {
    expect(wrapper.find('h1').text()).toBe('Home Page')
  })
})
