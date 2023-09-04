//18 - Mostre no console todas as propriedades desse objeto.

let eu = {
    nome: "Tássio",
    idade: "29",
    ocupacao: "Estudante"
};

for (var propriedade in eu) {
    console.log(propriedade + ': ' + eu[propriedade]);
}