function classificarAnimal(olhosNasLaterais: boolean): string {
    if (olhosNasLaterais) {
        return "PRESA";
    } else {
        return "PREDADOR";
    }
}

console.log(classificarAnimal(true));  