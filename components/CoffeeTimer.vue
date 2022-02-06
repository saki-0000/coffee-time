<template>
  <Timer @change="time = $event">{{ label }}</Timer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import Timer from './ThreeMinutesTimer.vue'
import { useCoffeeTimer } from '~/composable/coffee-timer'

const { getLabel } = useCoffeeTimer()
export default defineComponent({
  components: { Timer },
  setup: () => {
    const time = ref(180)
    const label = computed(() => getLabel(time.value))
    return {
      time,
      label,
      getLabel,
    }
  },
})
</script>
