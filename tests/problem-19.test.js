import { describe, expect, it } from 'vitest'
import { sortToys } from '../challenges/problem-19'

describe('problem-19 sortToys', () => {
    it('should sort toys according to the sorted positions', () => {
        const toys = ['ball', 'doll', 'car', 'puzzle']
        const positions = [2, 3, 1, 0]
        expect(sortToys(toys, positions)).toEqual(['puzzle', 'car', 'ball', 'doll'])

        const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
        const morePositions = [8, 6, 5, 7, 9]
        expect(sortToys(moreToys, morePositions)).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
    })
})
