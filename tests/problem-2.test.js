
import { describe, expect, it } from 'vitest'
import { countHour } from '../challenges/problem-2'

describe('problem-2', () => {
    it('should count the quantity of extra hours', () => {
        const year = 2022
        const holidays = ['01/06', '04/01', '12/25']

        expect(countHour(year, holidays)).toEqual(4)
    })
})
