import { shallowMount } from '@vue/test-utils'
import CoffeeTimer from '~/components/CoffeeTimer.vue'

describe('useTimer', () => {
  test('should work', () => {
    const wrapper = shallowMount(CoffeeTimer)
    expect(wrapper.text()).toBe('コーヒーを淹れる')
  })
})
