import { describe, expect, it } from 'vitest'
import { getMaxGifts } from '../challenges/problem-5'

describe('problem-5', () => {
    it('should return the highest sym of gifts that he could distribute', () => {
        
        const giftsCities = [12, 3, 11, 5, 7]
        const maxGifts = 20
        const maxCities = 3

        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(20)
    })

    it('should return zero If it is not possible to make any trips that satisfies everything', () => {

        expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toEqual(20)
        expect(getMaxGifts([50], 15, 1)).toEqual(0)
        expect(getMaxGifts([50], 100, 1)).toEqual(50)
        expect(getMaxGifts([50, 70], 100, 1)).toEqual(70)
        expect(getMaxGifts([50, 70, 30], 100, 2)).toEqual(100)
        expect(getMaxGifts([50, 70, 30], 100, 3)).toEqual(100)
        expect(getMaxGifts([50, 70, 30], 100, 4)).toEqual(100)
        expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)).toEqual(100)

    })
})
