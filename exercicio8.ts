function verificarPlacarVolei(pontosA: number, pontosB: number): string {
    if (pontosA >= 25 && (pontosA - pontosB) >= 2) {
        return "TIME A VENCEU O SET";
    }
    if (pontosB >= 25 && (pontosB - pontosA) >= 2) {
        return "TIME B VENCEU O SET";
    }
    if (pontosA === pontosB) {
        return "JOGO EMPATADO";
    }
    if (pontosA > pontosB) {
        return "TIME A VENCENDO";
    }
    if (pontosB > pontosA) {
        return "TIME B VENCENDO";
    }
    return "JOGO EMPATADO";
}
console.log(verificarPlacarVolei(3, 0));  // exemplo 1
console.log(verificarPlacarVolei(25, 23)); // exemplo 2