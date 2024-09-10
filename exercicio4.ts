function calcularPontuacaoBonificada(pontuacao: number, faseSeguinte: number): number {
    const faseAnterior = faseSeguinte - 1;
    const novaPontuacao = pontuacao * faseAnterior;
    return novaPontuacao;
}
const pontuacao: number = 2000;
const faseSeguinte: number = 4;

const novaPontuacao: number = calcularPontuacaoBonificada(pontuacao, faseSeguinte);
console.log(novaPontuacao);  