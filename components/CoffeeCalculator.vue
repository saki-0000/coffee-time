<template>
  <div>
    <v-text-field
      v-model="water"
      label="お湯の量"
      hint="今日はどのくらい淹れますか？"
      :rules="rules"
      @input="onInputWater()"
    />
    <v-text-field
      v-model="coffee"
      label="コーヒー豆の量"
      hint="今日はどのくらい淹れますか？"
      :rules="rules"
      @input="onInputCoffee()"
    />
    <div class="text">
      コーヒー{{ coffee }}gに必要な お湯の量は{{ water }}mlです。
    </div>
    <div class="text">１湯目：{{ (water * 0.2).toFixed(1) }}ml</div>
    <div class="text">２湯目：{{ (water * 0.2).toFixed(1) }}ml</div>
    <div class="text">３湯目：{{ (water * 0.6).toFixed(1) }}ml</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { isNum } from '~/util/helper'
import { useCoffeeCaluculator } from '~/composable/coffee-caluculator'

const { coffee, water, onInputWater, onInputCoffee } = useCoffeeCaluculator()
export default defineComponent({
  setup: () => {
    const validNum = (val: any) => {
      return isNum(val) ? true : '数字で入力してください。'
    }
    const rules = [validNum]
    return { coffee, water, rules, onInputWater, onInputCoffee }
  },
})
</script>
