function calcularQuantidadeCarne(
    quantidadeCriancas: number,
    quantidadePreAdolescentes: number,
    quantidadeTotal: number
  ): number {
    const carnePorCrianca = 100; 
    const carnePorPreAdolescente = 200; 
    const carnePorAdulto = 300; 
    const quantidadeAdultos = quantidadeTotal - quantidadeCriancas - quantidadePreAdolescentes;
    const quantidadeCarne = (
      quantidadeCriancas * carnePorCrianca +
      quantidadePreAdolescentes * carnePorPreAdolescente +
      quantidadeAdultos * carnePorAdulto
    );
    return quantidadeCarne;
  }
const quantidadeCriancas: number = 20;
const quantidadePreAdolescentes: number = 10;
const quantidadeTotal: number = 100;

const quantidadeCarne: number = calcularQuantidadeCarne(quantidadeCriancas, quantidadePreAdolescentes, quantidadeTotal);
console.log(quantidadeCarne); 
  