function calcularIdade(anoNascimento: number, anoAtual: number): number {
    return anoAtual - anoNascimento;
}
const anoNascimento: number = 1993;
const anoAtual: number = 2024;

const idade: number = calcularIdade(anoNascimento, anoAtual);
console.log(idade); 