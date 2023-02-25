import { describe, expect, it } from 'vitest'
import { checkPart } from '../challenges/problem-8'

describe('problem-8', () => {
    it('should return true if the part can be a palindrome after removing, at most, one character.', () => {
        // "uwu" is a palindrome without removing any character
        expect(checkPart("uwu")).toBe(true) // true

        // "miidim" can be a palindrome after removing the first "i"
        expect(checkPart("miidim")).toBe(true) // true

        expect(checkPart("midu")).toBe(false)
    })
})
