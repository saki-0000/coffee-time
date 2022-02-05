<template>
  <div>
    <v-btn :disabled="disabled" @click="onClick"><slot>スタート</slot></v-btn>
    {{ formatTime(time) }}
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
    let disabled = ref(false)
    watchEffect(() => {
      context.emit('change', time)
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
