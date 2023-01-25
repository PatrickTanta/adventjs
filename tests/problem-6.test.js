import { describe, expect, it } from 'vitest'
import { createCube } from '../challenges/problem-6'

describe('problem-6', () => {
    it('should return a cube of 3 size', () => {
        expect(createCube(3)).toEqual("  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/")
    })


    it('should return a cube of 1 size', () => {
        expect(createCube(1)).toEqual("/\\_\\\n\\/_/")
    })

    it('should return a cube of 2 size', () => {
        expect(createCube(2)).toEqual(" /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/")
    })
})
