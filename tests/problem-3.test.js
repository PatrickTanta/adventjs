import { describe, expect, it } from 'vitest'
import { distributeGifts } from '../challenges/problem-3'

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

describe('function that returns maximum number of gifts packs that Santa Clause can deliver', () => {
    it('should count the quantity of extra hours', () => {
        
        const packOfGifts = ["book", "doll", "ball"]
        const reindeers = ["dasher", "dancer"]

        expect(distributeGifts(packOfGifts, reindeers)).toEqual(2)
    })

    it('should count the quantity of extra hours', () => {
        
        const packOfGifts = ["book", "doll", "ball", "cellphone"]
        const reindeers = ["dasher", "dancer", "prancer", "vixen", "comet", "cupid", "donner", "blitzen"]

        expect(distributeGifts(packOfGifts, reindeers)).toEqual(4)
    })
})
