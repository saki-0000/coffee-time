<template>
  <Timer @change="time = $event">{{ label }}</Timer>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from '@nuxtjs/composition-api'
import Timer from './ThreeMinutesTimer.vue'

const changeLabel = (time: number, label: Ref<String>) => {
  switch (time) {
    case 180 - 1:
      label.value = '1湯目...'
      break
    case 120 - 1:
      label.value = '2湯目...'
      break
    case 60 - 1:
      label.value = '3湯目...'
      break
    case 0:
      label.value = 'Have a Good Time!'
      break
    default:
      break
  }
  return label
}
export default defineComponent({
  components: { Timer },
  setup: () => {
    const time = ref(180)
    const label = ref('コーヒーを淹れる')
    watchEffect(() => changeLabel(time.value, label))
    return {
      time,
      label,
      changeLabel,
    }
  },
})
</script>
