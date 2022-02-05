import { ref, computed } from '@nuxtjs/composition-api'
import { format } from 'date-fns'

export const useTimer = (initTime = 180) => {
  const _time = ref(180)
  const countDown = () => _time.value--
  const measureTime = () => {
    const intervalId = setInterval(() => {
      countDown()
      if (time.value === 0) {
        clearInterval(intervalId)
      }
    }, 1000)
  }
  const time = computed(() => _time.value)
  const formatTime = (time: number) => {
    return format(new Date(0, 0, 0, 0, 0, time), 'mm:ss')
  }
  return {
    measureTime,
    time,
    formatTime,
  }
}
