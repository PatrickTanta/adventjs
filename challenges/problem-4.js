export const fitsInOneBox = (boxes) => {

    const sortedBoxes = boxes.sort((a, b) => (a.l > b.l) ? 1 : ((b.l > a.l) ? -1 : 0))

    let x = 0
    for (let i = 1; i < sortedBoxes.length; i++) {
        if (sortedBoxes[i-1].l < sortedBoxes[i].l && sortedBoxes[i-1].w < sortedBoxes[i].w && sortedBoxes[i-1].h < sortedBoxes[i].h) {
            x += 1
        }
    }
    
    return x === sortedBoxes.length - 1
}
