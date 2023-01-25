export const createCube = (size) =>  {
    const lines = []
    for (const i of Array.from(Array(size*2).keys())) {
        lines.push(
            ' '.repeat(Math.abs(i === size || i === size - 1 ? 0 : size - i - (i < size - 1 ? 1 : 0)))
            + (i < size ? '/' : '\\')
            + (i < size ? '\\/'.repeat(i) : '/\\'.repeat(Math.abs(size-i+(size-1))))
            + (i < size ? '\\ ': '/ ').repeat(size+1).trim().split(' ').join('_')
            + (2 * size - 1 === i ? '' : '\n')
        )
    }
    return lines.join('')
}
