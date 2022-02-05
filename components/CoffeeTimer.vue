<template>
  <Timer @change="label = getLabel($event)">{{ label }}</Timer>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Timer from './ThreeMinutesTimer.vue'
import { useCoffeeTimer } from '~/composable/coffee-timer'

const { getLabel } = useCoffeeTimer()
export default defineComponent({
  components: { Timer },
  setup: () => {
    const time = ref(180)
    const label = ref('コーヒーを淹れる')
    return {
      time,
      label,
      getLabel,
    }
  },
})
</script>
