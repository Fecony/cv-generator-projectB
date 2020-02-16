import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

const spyLog = jest.spyOn(console, 'log')

describe('Login.vue', () => {
  const wrapper = mount(Login)

  it('is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has form', () => {
    expect(wrapper.html().includes('form')).toBe(true)
  })

  it('should console log user entered data', () => {
    let email = 'test@test.com'
    wrapper.find('[type=email]').setValue(email)
    wrapper.find('form').trigger('submit.prevent')
    expect(spyLog).toBeCalledWith(`logged in as: ${email}`)
  })
})
