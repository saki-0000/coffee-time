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
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { isNum } from '~/util/helper'

export default defineComponent({
  setup: () => {
    const coffee = ref(0)
    const water = ref(0)
    const onInputWater = () => {
      coffee.value = Math.round(water.value * (7 / 100) * 10) / 10
    }
    const onInputCoffee = () => {
      water.value = Math.round(coffee.value * (100 / 7) * 10) / 10
    }
    const validNum = (val: any) => {
      return isNum(val) ? true : '数字で入力してください。'
    }
    const rules = [validNum]
    return { coffee, water, rules, onInputWater, onInputCoffee }
  },
})
</script>
