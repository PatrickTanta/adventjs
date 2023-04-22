export const getOptimalPath = (path) => {
    const getOptimalPathRecursive = (row, column) => {
      if (row === path.length - 1) {
        return path[row][column]
      }

      const left = getOptimalPathRecursive(row + 1, column)
      const right = getOptimalPathRecursive(row + 1, column + 1)

    //   console.log(`return Math.min(left, right): ${left} ${right}`, Math.min(left, right))
    //   console.log('return path[row][column]: ', path[row][column])
    //   console.log('   ')
      return path[row][column] + Math.min(left, right)
    }

    return getOptimalPathRecursive(0, 0)
}
