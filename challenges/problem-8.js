export const countTime = (leds) =>  {
    const ledStripsOff = leds.join('').split('1')
    ledStripsOff[0] += ledStripsOff.pop()
    return ledStripsOff.reduce((time, ledStripOff) => {
        return Math.max(time, ledStripOff.length * 7);
    }, 0)
}
