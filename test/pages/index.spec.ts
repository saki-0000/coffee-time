import { shallowMount } from '@vue/test-utils'
import IndexPage from '~/pages/index.vue'

describe('CoffeeCalculator.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
