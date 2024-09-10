function atualizarpontuacao(pontuacao: number, pontosconquistados: number): number {
    let novapontuacao = pontuacao + pontosconquistados;
    return novapontuacao;
}
let pontuacao = 300;
let pontosconquistados = 10;

let novapontuacao = atualizarpontuacao(pontuacao, pontosconquistados);
console.log(novapontuacao);