import { describe, expect, it } from 'vitest'
import { fitsInOneBox } from '../challenges/problem-4'

describe('problem-4', () => {
    it('should return true when boxes fit in one box', () => {
        
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 }
        ]

        expect(fitsInOneBox(boxes)).toEqual(true)
    })

    it('should return true when boxes fit in one box', () => {
        
        const boxes = [
            { l: 2, w: 2, h: 2 },
            { l: 1, w: 1, h: 1 }
        ]

        expect(fitsInOneBox(boxes)).toEqual(true)
    })

    it('should return false when boxes doesnt fit in one box', () => {
        
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 3, w: 1, h: 3 }
        ]

        expect(fitsInOneBox(boxes)).toEqual(false)
    })

    it('should return false when boxes doesnt fit in one box', () => {
        
        const boxes = [
            { l: 3, w: 1, h: 3 },
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 }
        ]

        expect(fitsInOneBox(boxes)).toEqual(false)
    })
})
