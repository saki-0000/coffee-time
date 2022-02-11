import { shallowMount, Wrapper } from '@vue/test-utils'
import ThreeMinutesTimer from '~/components/ThreeMinutesTimer.vue'
import * as composable from '~/composable/timer'

describe('ThreeMinutesTimer.vue', () => {
  let wrapper: Wrapper<any>
  beforeEach(() => {
    wrapper = shallowMount(ThreeMinutesTimer)
  })

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('call useTime`s functions when the `start` button clicked ', () => {
    wrapper.get('#startButton').trigger('click')
    expect(wrapper.get('#displayTime').text()).toBe('03:00')
  })
  test('v-btn to be disabled when the `start` button clicked ', () => {
    wrapper.get('#startButton').trigger('click')
    expect(wrapper.get('#displayTime').text()).toBe('03:00')
  })
})
