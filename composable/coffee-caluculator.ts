import { ref } from '@nuxtjs/composition-api'

export const useCoffeeCaluculator = () => {
  const coffee = ref(0)
  const water = ref(0)
  const onInputWater = () => {
    coffee.value = Math.round(water.value * (7 / 100) * 10) / 10
  }
  const onInputCoffee = () => {
    water.value = Math.round(coffee.value * (100 / 7) * 10) / 10
  }
  return {
    coffee,
    water,
    onInputWater,
    onInputCoffee,
  }
}
