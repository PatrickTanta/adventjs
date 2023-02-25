import { describe, expect, it } from 'vitest'
import { countTime } from '../challenges/problem-9'

describe('problem-8', () => {
    it('should return how many seconds it takes for all the leds to turn on', () => {
        const leds = [0, 1, 1, 0, 1]

        expect(countTime(leds)).toEqual(7)
        expect(countTime([0, 0, 0, 1])).toEqual(21)
        expect(countTime([0, 0, 1, 0, 0])).toEqual(28)
    })
})
