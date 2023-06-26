export const dryNumber = (dry, numbers) => {
    const listOfNumbers = []
    for (let index = 1; index <= numbers; index++) {
        if (index.toString().includes(dry.toString())) {
            listOfNumbers.push(index)
        }
    }
    return listOfNumbers
}