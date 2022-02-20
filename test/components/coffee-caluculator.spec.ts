import { shallowMount, Wrapper } from '@vue/test-utils'
import CoffeeCalculator from '~/components/CoffeeCalculator.vue'

const onInputWater = jest.fn(() => {})
const onInputCoffee = jest.fn(() => {})
jest.mock('~/composable/coffee-caluculator', () => ({
  useCoffeeCaluculator: () => ({
    coffee: 21,
    water: 300,
    onInputWater,
    onInputCoffee,
  }),
}))

describe('CoffeeCalculator.vue', () => {
  let wrapper: Wrapper<any>
  beforeEach(() => {
    wrapper = shallowMount(CoffeeCalculator)
  })

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('call useTime`s functions when the `start` button clicked ', () => {
    wrapper.get('#waterInput').vm.$emit('input')
    expect(wrapper.get('#summuryText').text()).toBe(
      'コーヒー21gに必要な お湯の量は300mlです。'
    )
    wrapper.get('#coffeeInput').vm.$emit('input')
    expect(wrapper.get('#summuryText').text()).toBe(
      'コーヒー21gに必要な お湯の量は300mlです。'
    )
    expect(onInputWater).toHaveBeenCalledTimes(1)
    expect(onInputCoffee).toHaveBeenCalledTimes(1)
  })
})
