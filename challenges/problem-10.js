export const checkJump = (heights) =>  {
    const maxValue = Math.max(...heights)
    const maxValueIndex = heights.indexOf(maxValue)

    const maxValueAtStartOrEnd = [0, heights.length - 1].includes(maxValueIndex)

    const leftArray = [...heights].slice(0, maxValueIndex)
    const rightArray = [...heights].slice(maxValueIndex,)

    const isUp = leftArray.slice(1).every((height, index) => height >= leftArray[index]);
    const isDown = rightArray.slice(1).every((height, index) => height <= rightArray[index]);

    return !maxValueAtStartOrEnd && isUp && isDown
}
