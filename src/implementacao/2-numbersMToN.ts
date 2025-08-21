export function showNumbersBetween(M: number, N: number): number[] {
    if (M >= N) {
        throw new Error("M deve ser menor que N");
    }

    const numeros: number[] = [];
    for (let i = M; i <= N; i++) {
        numeros.push(i);
    }
    return numeros;
}
