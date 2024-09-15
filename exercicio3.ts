function periodoHistorico(ano: number): string {
    if (ano <= 476) {
        return "ANTIGA";
    } else if (ano <= 1453) {
        return "MEDIA";
    } else if (ano <= 1789) {
        return "MODERNA";
    } else {
        return "CONTEMPORANEA";
    }
}
console.log(periodoHistorico(-3000)); 