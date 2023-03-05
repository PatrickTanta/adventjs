
export const selectSleight = (distance, sleighs) =>  {
    const batteryCapacity = 20
    const hasCapacity = item => item.consumption * distance <= batteryCapacity
    const consumptionsAllowed = sleighs.filter(hasCapacity)
    if (!consumptionsAllowed.length) return null
    const chosenSleight = consumptionsAllowed.at(-1)
    return chosenSleight.name
}
