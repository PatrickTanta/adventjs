import { describe, expect, it } from 'vitest'
import { getGiftsToRefill } from '../challenges/problem-7'

describe('problem-7', () => {
    it('should return what gifts we have to buy to replenish our stores now that Christmas is approaching', () => {
        const a1 = ['bike', 'car', 'bike', 'bike']
        const a2 = ['car', 'bike', 'doll', 'car']
        const a3 = ['bike', 'pc', 'pc']

        expect(getGiftsToRefill(a1, a2, a3)).toEqual(['doll', 'pc'])
    })

    it('should return what gifts we have to buy to replenish our stores now that Christmas is approaching', () => {
        const a1 = ['horse', 'car', 'horse', 'horse', 'htc']
        const a2 = ['car', 'horse', 'doll', 'car']
        const a3 = ['horse', 'htc', 'htc']

        expect(getGiftsToRefill(a1, a2, a3)).toEqual(['doll'])
    })
})
