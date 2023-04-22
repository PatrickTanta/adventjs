import { describe, expect, it } from 'vitest'
import { getOptimalPath } from '../challenges/problem-14'

describe('problem-14', () => {
    it('should return the sum of the optimal path', () => {
        expect(getOptimalPath([[0], [2, 3]])).toEqual(2)
        expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toEqual(5)
        expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toEqual(8)
    })
})
