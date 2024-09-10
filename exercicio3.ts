function formatarDadosPersonagem(nomePersonagem: string, classe: string, pontuacao: number): string {
    return `OLÁ, ${nomePersonagem}. VOCE É UM ${classe} COM PONTUAÇÃO ATUAL DE ${pontuacao}`;
}
const nomePersonagem: string = "Shaolin Matador de Porco";
const classe: string = "Mago";
const pontuacao: number = 320;

const resultado: string = formatarDadosPersonagem(nomePersonagem, classe, pontuacao);
console.log(resultado); 