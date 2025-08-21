export function analyzeMultiples (numeros: number[]) {
  const multiplos2e5: number[] = [];
  const multiplos2e3: number[] = [];

  for (const num of numeros) {
    if (num === -1) break; // para quando encontra -1

    if (num % 2 === 0 && num % 5 === 0) {
      multiplos2e5.push(num);
    }

    if (num % 2 === 0 && num % 3 === 0) {
      multiplos2e3.push(num);
    }
  }

  return { multiplos2e5, multiplos2e3 };
}

