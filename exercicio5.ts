function calcularPrecoTotal(precoPeca1: number, precoPeca2: number, precoPeca3: number, quantidade: number): number {
    const precoConjunto = precoPeca1 + precoPeca2 + precoPeca3;
    const precoTotal = precoConjunto * quantidade;
    return precoTotal;
}
const precoPeca1: number = 20;
const precoPeca2: number = 30;
const precoPeca3: number = 50;
const quantidade: number = 3;

const precoTotal: number = calcularPrecoTotal(precoPeca1, precoPeca2, precoPeca3, quantidade);
console.log(precoTotal); 
