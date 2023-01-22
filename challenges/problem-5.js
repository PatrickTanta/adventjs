const combinationUtil = (arr, data, start, end, index, r, store) => {
    if (index == r) {
        for (let j = 0; j < r; j++) {
            store.push(data[j])
        }
    }

    for (let i=start; i<=end && end-i+1 >= r-index; i++) {
        data[index] = arr[i]
        combinationUtil(arr, data, i+1, end, index+1, r, store)
    }
}

const getSumsArray = (arr, groupBy) => {
    const newData = []
    for (let i = 0; i < arr.length; i+= groupBy) {
        newData.push(arr.slice(i, i + groupBy))
    }

    const newSums = newData.map(item => item.reduce((a, b) => a + b, 0))
    
    return newSums
}

export const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
    let maxsElements = 0
    for (let i = 0; i < giftsCities.length; i++) {
        if (giftsCities[i] > maxGifts) {
            maxsElements++
        }
    }

    if (maxsElements === giftsCities.length) {
        return 0
    }
    
    const maxList = []
    
    for (let i = maxCities; i > 0; i--) {
        let data = new Array(maxCities)
        const groupingBy = []
        
        combinationUtil(giftsCities, data, 0, giftsCities.length - 1, 0, i, groupingBy)
        const sumsArray = getSumsArray(groupingBy, i)

        if (sumsArray.includes(maxGifts)) {
            return maxGifts
        }

        const closest = sumsArray.sort((a, b) => a - b).reverse().find(e => e <= maxGifts)

        maxList.push(closest)
    }

    return Math.max.apply(Math, maxList.filter(item => item !== undefined))

}
