
export const wrapping = (gifts) => {
    const gifstWrapped = []
    gifts.forEach(element => {
        const length = element.length
        const star = '*'.repeat(length + 2)
        const wrapped = `${star}\n*${element}*\n${star}`
        gifstWrapped.push(wrapped)
    })
    return gifstWrapped
}
