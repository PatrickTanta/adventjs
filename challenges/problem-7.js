export const getGiftsToRefill = (a1, a2, a3) =>  {
    const gifts = [...a1, ...a2, ...a3]

    let counter = {}
    gifts.forEach((gift) => {
        counter[gift] = 0
        if (a1.includes(gift)) {
            counter[gift] += 1
        }
        if (a2.includes(gift)) {
            counter[gift] += 1
        }
        if (a3.includes(gift)) {
            counter[gift] += 1
        }
    })

    const arrayFiltered = Object.entries(counter).filter(item => item[1] === 1)

    const giftsToRefill = arrayFiltered.map(item => item[0])

    return giftsToRefill
}
