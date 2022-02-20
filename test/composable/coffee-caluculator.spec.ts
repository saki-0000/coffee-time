import { useCoffeeCaluculator } from '~/composable/coffee-caluculator'

describe('useTimer', () => {
  test('should work', () => {
    const { coffee, water, onInputWater, onInputCoffee } =
      useCoffeeCaluculator()
    expect(coffee.value).toBe(0)
    expect(water.value).toBe(0)
    water.value = 300
    onInputWater()
    expect(coffee.value).toBe(21)
    expect(water.value).toBe(300)
    coffee.value = 14
    onInputCoffee()
    expect(coffee.value).toBe(14)
    expect(water.value).toBe(200)
  })
})
