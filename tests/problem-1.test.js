
import { describe, expect, it } from 'vitest'
import { wrapping } from '../challenges/problem-1'

describe('problem-1', () => {
    it('should wrap all gifts with *', () => {
        const gifts = ['cat', 'game', 'socks']
        const wrappedGifts = wrapping(gifts)
        expect(wrappedGifts).toEqual([
            "*****\n*cat*\n*****",
            "******\n*game*\n******",
            "*******\n*socks*\n*******"
        ])
    })
})
