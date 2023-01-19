export const distributeGifts = (packOfGifts, reindeers) => {
    const packOfGiftsWeight = packOfGifts.join('').length

    const reindeersWeightCapacity = reindeers.join('').length * 2

    return Math.floor(reindeersWeightCapacity / packOfGiftsWeight)
}
