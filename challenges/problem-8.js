const isPalindrom = (part) => {
    const reversePart = part.split('').reverse().join('')
    if (part === reversePart) {
        return true
    }
    return false
}

export const checkPart = (part) =>  {
    if (isPalindrom(part)) {
        return true
    }

    for (let p = 0; p < part.length; p++) {
        const listPart = part.split('')
        listPart.splice(p, 1)
        if (isPalindrom(listPart.join(''))) {
            return true
        }
    }

    return false
}
