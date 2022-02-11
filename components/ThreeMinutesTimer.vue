<template>
  <div>
    <v-btn id="startButton" :disabled="disabled" @click="onClick"
      ><slot>スタート</slot></v-btn
    >
    <span id="displayTime">
      {{ formatTime(time) }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from '@nuxtjs/composition-api'
import { useTimer } from '~/composable/timer'

export default defineComponent({
  props: {
    second: {
      type: Number,
      default: 180,
    },
  },
  emits: ['change'],
  setup: (_, context) => {
    const { measureTime, time, formatTime } = useTimer()
    const disabled = ref(false)
    watchEffect(() => {
      context.emit('change', time.value)
    })
    const onClick = () => {
      disabled.value = true
      measureTime()
    }
    return {
      disabled,
      time,
      onClick,
      formatTime,
    }
  },
})
</script>
