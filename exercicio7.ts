function calcularIMC(peso: number, altura: number): number {
    const imc = peso / (altura * altura);
    return imc;
}
const peso: number = 56;
const altura: number = 1.70;
const imc: number = calcularIMC(peso, altura);
console.log(imc); 