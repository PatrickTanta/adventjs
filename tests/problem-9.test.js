import { describe, expect, it } from 'vitest'
import { checkJump } from '../challenges/problem-9'

describe('problem-8', () => {
    it('should return if sleight make a parabola', () => {
        expect(checkJump([1, 3, 8, 5, 2])).toEqual(true)
        expect(checkJump([1, 7, 3, 5])).toEqual(false)
        expect(checkJump([1, 7, 3, 10])).toEqual(false)
        expect(checkJump([1, 3, 8, 5, 2, 1, 0])).toEqual(true)
        expect(checkJump([1, 18, 8, 5, 2, 1, 0])).toEqual(true)
        expect(checkJump([1, 18, 8, 20, 2, 1, 0])).toEqual(false)
    })
})
