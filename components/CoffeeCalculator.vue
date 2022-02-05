<template>
  <div>
    <v-text-field
      v-model="coffee"
      label="コーヒー豆の量"
      hint="今日はどのくらい淹れますか？"
      :rules="rules"
    />
    <div class="text">
      コーヒー{{ coffee }}gに必要な お湯の量は{{
        water(coffee).toFixed(1)
      }}mlです。
    </div>
    <div class="text">１湯目：{{ (water(coffee) * 0.2).toFixed(1) }}ml</div>
    <div class="text">２湯目：{{ (water(coffee) * 0.2).toFixed(1) }}ml</div>
    <div class="text">３湯目：{{ (water(coffee) * 0.6).toFixed(1) }}ml</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup: () => {
    const water = (coffee: number) => {
      return coffee * (100 / 7)
    }
    const isNum = (val: any) => {
      return !isNaN(val)
    }
    const validNum = (val: any) => {
      return isNum(val) ? true : '数字で入力してください。'
    }
    const rules = [validNum]
    return { coffee: 0, water, rules }
  },
})
</script>
