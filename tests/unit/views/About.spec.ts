import { mount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  const wrapper = mount(About)

  it('is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains h1 with about text"', () => {
    expect(wrapper.find('h1').text()).toBe('This is an about page')
  })
})
