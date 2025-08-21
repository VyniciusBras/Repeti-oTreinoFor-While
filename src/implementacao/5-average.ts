export function avarage(
  aluno1: number[],
  aluno2: number[],
  aluno3: number[]
): string[] {

  const calcularSituacao = (notas: number[], index: number): string => {
    const media = notas.reduce((soma, n) => soma + n, 0) / notas.length;

    if (media >= 7) {
      return `Aluno ${index}: Passou`;
    } else if (media > 4 && media < 7) {
      return `Aluno ${index}: Recuperação`;
    } else if (media <= 4) {
      return `Aluno ${index}: Reprovado`;
    }
    return `Aluno ${index}: Situação desconhecida`;
  };

  return [
    calcularSituacao(aluno1, 1),
    calcularSituacao(aluno2, 2),
    calcularSituacao(aluno3, 3),
  ];
}