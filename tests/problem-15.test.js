import { describe, expect, it } from 'vitest'
import { decorateTree } from '../challenges/problem-15'

describe('problem-15', () => {
    it('should return am array with row of a triangle piramid', () => {
        expect(decorateTree('B P R P')).toEqual(['R', 'P B', 'R B B', 'B P R P'])
        expect(decorateTree('B B')).toEqual(['B', 'B B'])
    })
})
