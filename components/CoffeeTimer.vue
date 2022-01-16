<template>
  <div>
    <v-btn :disabled="disabled" @click="startTimer">{{ buttonLabel() }}</v-btn>
    {{ formatTime(time) }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { format } from 'date-fns'

export default defineComponent({
  setup: () => {
    const disabled = ref(false)
    const startTimer = () => {
      disabled.value = true
      const intervalId = setInterval(() => {
        countDown()
        if (time.value === 0) {
          clearInterval(intervalId)
        }
      }, 1000)
    }
    const time = ref(180)
    const formatTime = (time: number) => {
      return format(new Date(0, 0, 0, 0, 0, time), 'mm:ss')
    }
    const countDown = () => {
      time.value--
    }
    const buttonLabel = () => {
      let label = 'コーヒーを淹れる'
      if (time.value < 180) {
        label = '1湯目...'
      }
      if (time.value < 120) {
        label = '2湯目...'
      }
      if (time.value < 60) {
        label = '3湯目...'
      }
      if (time.value === 0) {
        label = 'Have a Good Time!'
      }
      return label
    }
    return {
      disabled,
      time,
      startTimer,
      formatTime,
      buttonLabel,
    }
  },
})
</script>
