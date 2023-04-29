export const decorateTree = (base) => {
    const rules = {
        PP: 'P',
        BP: 'R',
        RP: 'B',
        BR: 'P',
    }

    const baseRow = base.split(' ')

    const newTree = [baseRow]

    const groupTree = (ntree) => {
        return ntree.slice(0, -1).map((el, i) => el + ntree[i + 1])
    }

    const getUpperDecoration = (str) => {
        if (str.length < 2) return str
        if (rules[str]) return rules[str]
        const strReversed = str.split('').reverse().join('')
        if (rules[strReversed]) return rules[strReversed]
        if (str[0] === str[1]) return str[0]
        return str[0]
    }

    const buildChristmasTree = (tree) => {
        if (tree.length < 2) {
            return tree[0]
        }
        const groupedTree = groupTree(tree)
        const secondRow = groupedTree.map(getUpperDecoration)
        newTree.push(secondRow)
        return buildChristmasTree(secondRow)
    }

    buildChristmasTree(baseRow)

    const decorationsFromTopToButton = newTree.map((item) => item.join(' ')).reverse()

    return decorationsFromTopToButton
}
