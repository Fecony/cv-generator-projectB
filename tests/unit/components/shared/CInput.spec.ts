import { shallowMount } from '@vue/test-utils'
import CInput from '@/components/shared/CInput.vue'

const spyWarn = jest.spyOn(console, 'warn')

describe('CInput.vue', () => {
  const wrapper = shallowMount(CInput)

  it('is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders input element', () => {
    expect(wrapper.contains('input')).toBe(true)
  })

  it('creates input with correct label', () => {
    let label = 'test label'
    const wrapper = shallowMount(CInput, {
      propsData: {
        label
      }
    })

    expect(wrapper.find('span').text()).toBe(label)
  })

  it('logs error on unsuported type', () => {
    let type = 'JEST'
    shallowMount(CInput, {
      propsData: {
        type
      }
    })
    expect(spyWarn).toBeCalledWith(
      `CInput: allowed types are text,password,email,number,url,tel,search,color, you tried to use: "${type}"`
    )
  })
})
