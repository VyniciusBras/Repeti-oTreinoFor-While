export function showSecondHighestValue(numbers: number[]): number {
    if (numbers.length < 2) {
        throw new Error("O array deve conter pelo menos dois números.");
    }

    let highest = -Infinity;
    let secondHighest = -Infinity;

    for (const num of numbers) {
        if (num > highest) {
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num !== highest) {
            secondHighest = num;
        }
    }

    if (secondHighest === -Infinity) {
        throw new Error("Não foi possível encontrar um segundo numero.");
    }

    return secondHighest;
}
