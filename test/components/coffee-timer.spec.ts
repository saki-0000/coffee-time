import { shallowMount } from '@vue/test-utils'
import CoffeeTimer from '~/components/CoffeeTimer.vue'
import ThreeMinutesTimer from '~/components/ThreeMinutesTimer.vue'

jest.mock('~/composable/coffee-timer', () => ({
  useCoffeeTimer: () => ({
    getLabel: jest.fn(() => 'test'),
  }),
}))

describe('CoffeeTimer', () => {
  test('子コンポーネントからchangeイベントを受けたときにその返り値が表示されていること', () => {
    const wrapper = shallowMount(CoffeeTimer)
    wrapper.findComponent(ThreeMinutesTimer).vm.$emit('change', 0)
    expect(wrapper.text()).toBe('test')
  })
})
