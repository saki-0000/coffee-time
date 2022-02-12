import { shallowMount, Wrapper } from '@vue/test-utils'
import ThreeMinutesTimer from '~/components/ThreeMinutesTimer.vue'
import * as composable from '~/composable/timer'

let measureTime = jest.fn(() => {})
let time = jest.fn(() => 100)
let formatTime = jest.fn(() => '100')
jest.mock('~/composable/timer', () => ({
  useTimer: () => ({
    measureTime: measureTime,
    time: time,
    formatTime: formatTime,
  }),
}))

describe('ThreeMinutesTimer.vue', () => {
  let wrapper: Wrapper<any>
  beforeEach(() => {
    wrapper = shallowMount(ThreeMinutesTimer)
  })

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('call useTime`s functions when the `start` button clicked ', () => {
    wrapper.get('#startButton').vm.$emit('click')
    expect(measureTime).toHaveBeenCalledTimes(1)
    // TODO：本当は2回目の呼び出し時の引数をチェックしたい
    expect(formatTime).toHaveBeenCalledTimes(2)
    expect(wrapper.get('#displayTime').text()).toBe('100')
  })
  test('v-btn to be disabled when the `start` button clicked ', async () => {
    wrapper.get('#startButton').vm.$emit('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.get('#startButton').attributes().disabled).toBe('true')
  })
})
