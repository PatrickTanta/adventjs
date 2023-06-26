export const sortToys = (toys, positions) => {
    const minPosition = Math.min(...positions);

    return toys.reduce((orderedToys, toy, index) => {
        orderedToys[positions[index] - minPosition] = toy;
        return orderedToys;
    }, []);
}