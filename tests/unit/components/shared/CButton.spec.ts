import { shallowMount } from '@vue/test-utils'
import CButton from '@/components/shared/CButton.vue'

describe('CButton.vue', () => {
  const wrapper = shallowMount(CButton)

  it('is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders button element', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('renders button with default text', () => {
    expect(wrapper.text()).toContain('Button')
  })

  it('renders button with custom text', () => {
    let wrapper = shallowMount(CButton, {
      slots: {
        default: ['test button']
      }
    })
    expect(wrapper.text()).toContain('test button')
  })
})
