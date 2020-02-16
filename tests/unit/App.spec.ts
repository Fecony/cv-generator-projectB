import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('App.vue', () => {
  const wrapper = shallowMount(App, { localVue, router })

  it('is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains div with id "app"', () => {
    expect(wrapper.attributes().id).toContain('app')
  })
})
