import { describe, expect, it } from 'vitest'
import { fixLetter } from '../challenges/problem-16'

describe('problem-16 fixLetter', () => {
    it('should delete spaces at the beginning and the end', () => {
        const letter = '  papa  '
        expect(fixLetter(letter)).toBe('Papa.')
    })

    it('should delete space duplication', () => {
        const letter = '  papa  give     change  '
        expect(fixLetter(letter)).toBe('Papa give change.')
    })

    it('should add final point at the end', () => {
        const letterA = '  papa,give            the ,    change  '
        expect(fixLetter(letterA)).toBe('Papa, give the, change.')
        const letterB = '  papa,give            the ,    chance,    the p'
        expect(fixLetter(letterB)).toBe('Papa, give the, chance, the p.')
    })
})
