import { isNum } from '~/util/helper'

describe('~/util/helper', () => {
  const A_NUMBER = 100
  const A_STRING = 'test'
  describe('isNum', () => {
    test('to be true when the first arg is a number', () => {
      expect(isNum(A_NUMBER)).toBe(true)
    })
    test('to be false when the first arg is not a number', () => {
      expect(isNum(A_STRING)).not.toBe(true)
    })
  })
})
