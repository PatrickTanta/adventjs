import { describe, expect, it } from 'vitest'
import { dryNumber } from '../challenges/problem-18'

describe('problem-18 dryNumber', () => {
    it('should show all the numbers that have the number with ink ran out', () => {
        expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15])
    })
})
