import { useTimer } from '~/composable/timer'

describe('useTimer', () => {
  test('should work', () => {
    jest.useFakeTimers()
    const { measureTime, time, formatTime } = useTimer()
    expect(time.value).toBe(180)
    expect(formatTime(time.value)).toBe('03:00')
    measureTime()

    jest.advanceTimersByTime(1000)
    expect(time.value).toBe(179)
  })
})
