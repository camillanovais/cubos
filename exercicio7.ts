function verificarAprovacao(media: number, frequencia: number, projetoFinal: number): string {
    if ((media >= 60 && frequencia >= 75 && projetoFinal > 0) || 
        (frequencia >= 75 && projetoFinal >= 85)) {
        return "APROVADO";
    } else {
        return "REPROVADO";
    }
}
console.log(verificarAprovacao(80, 74, 78)); // exemplo 1
console.log(verificarAprovacao(55, 90, 98));  // exemplo 2