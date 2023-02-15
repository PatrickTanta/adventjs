export const checkJump = (heights) =>  {
    const maxValue = Math.max(...heights)

    const maxValueIndex = heights.findIndex(item => item === maxValue)

    const leftArray = [...heights].slice(0, maxValueIndex)
    const rightArray = [...heights].slice(maxValueIndex, )

    const leftCondition = [...leftArray].sort().reverse() === leftArray

    console.log('fist  ',  [...rightArray].sort().reverse())
    console.log('const  ', [...rightArray])
    const rightCondition = [...rightArray].sort().reverse() === rightArray
    
    return leftCondition && rightCondition
}
