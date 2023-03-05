
export const getCompleted = (part, total) =>  {
    const [h1, m1, s1] = part.split(':')
    const [h2, m2, s2] = total.split(':')

    const partInSeconds = Number(h1) * 3600 + Number(m1) * 60 + Number(s1)
    const totalInSeconds = Number(h2) * 3600 + Number(m2) * 60 + Number(s2)

    const gcd_two_numbers = (x, y) => {
        x = Math.abs(x)
        y = Math.abs(y)
        while (y) {
            const t = y
            y = x % y
            x = t
        }
        return x
    }

    const gcd = gcd_two_numbers(partInSeconds, totalInSeconds)
    const fr = `${partInSeconds/gcd }/${totalInSeconds/gcd}`

    return fr
}
