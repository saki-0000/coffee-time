<template>
  <div>
    <v-btn :disabled="disabled" @click="onClick"><slot>スタート</slot></v-btn>
    {{ formatTime(time) }}
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from '@vue/composition-api'
import { format } from 'date-fns'

const measureTime = (time: Ref<number>) => {
  const intervalId = setInterval(() => {
    time.value--
    if (time.value === 0) {
      clearInterval(intervalId)
    }
  }, 1000)
}

const formatTime = (time: number) => {
  return format(new Date(0, 0, 0, 0, 0, time), 'mm:ss')
}

export default defineComponent({
  props: {
    second: {
      type: Number,
      default: 180,
    },
  },
  emits: ['change'],
  setup: (props, context) => {
    const disabled = ref(false)
    const time = ref(props.second)
    watchEffect(() => {
      time.value = props.second
    })
    watchEffect(() => {
      context.emit('change', time.value)
    })
    const onClick = () => {
      disabled.value = true
      measureTime(time)
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
