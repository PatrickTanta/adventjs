import { describe, expect, it } from 'vitest'
import { selectSleight } from '../challenges/problem-12'

describe('problem-12', () => {
    it('should return the sleight with the less consumption', () => {

        const distance = 30
        const sleighs = [
            { name: "Dasher", consumption: 0.3 },
            { name: "Dancer", consumption: 0.5 },
            { name: "Rudolph", consumption: 0.7 },
            { name: "Midu", consumption: 1 }
        ]

        expect(selectSleight(distance, sleighs)).toEqual('Dancer')

        const distance2 = 30
        const sleighs2 = [
            { name: "Gorusuke", consumption: 0.3 },
            { name: "Madeval", consumption: 0.5 },
            { name: "Lolivier", consumption: 0.7 },
            { name: "Hyuuh", consumption: 1 }
        ]
        expect(selectSleight(distance2, sleighs2)).toEqual('Madeval')
    })
})
