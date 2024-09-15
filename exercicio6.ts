function verificarCaixaOnibus(marcacaoRoleta: number, quantidadeCaixa: number, precoPassagem: number): string {
    const valorEsperado = marcacaoRoleta * precoPassagem;
    
    if (quantidadeCaixa === valorEsperado) {
        return "TUDO CERTO";
    } else if (quantidadeCaixa > valorEsperado) {
        return "DINHEIRO SOBRANDO";
    } else {
        return "DINHEIRO FALTANDO";
    }
}
console.log(verificarCaixaOnibus(45, 257, 5.70)); 
