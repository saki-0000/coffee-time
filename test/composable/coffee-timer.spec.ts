import { useCoffeeTimer } from '~/composable/coffee-timer'

describe('useCoffeeTimer', () => {
  test('should work', () => {
    const { getLabel } = useCoffeeTimer()
    expect(getLabel(180)).toBe('コーヒーを淹れる')
    expect(getLabel(179)).toBe('1湯目...')
    expect(getLabel(121)).toBe('1湯目...')
    expect(getLabel(120)).toBe('2湯目...')
    expect(getLabel(61)).toBe('2湯目...')
    expect(getLabel(60)).toBe('3湯目...')
    expect(getLabel(1)).toBe('3湯目...')
    expect(getLabel(0)).toBe('Have a Good Time!')
  })
})
