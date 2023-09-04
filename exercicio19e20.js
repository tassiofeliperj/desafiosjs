/*
19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
Na propriedade amigos, adicione ao menos 4 amigos.

20 - Mostre no console o nome de um amigo de cada lista.
*/

var cadastro = [
    {
        nome: 'Tássio',
        idade: 29,
        telefone: '00000-0000',
        amigos: ['Larissa', 'Andrielle', 'Marcelo', 'Ysmael']
    },
    {
        nome: 'Larissa',
        idade: 24,
        telefone: '00000-0000',
        amigos: ['Tássio', 'Andrielle', 'Marcelo', 'Ysmael']
    },
    {
        nome: 'Andrielle',
        idade: 22,
        telefone: '00000-0000',
        amigos: ['Tássio', 'Larissa', 'Marcelo', 'Ysmael']
    },
    {
        nome: 'Marcelo',
        idade: 25,
        telefone: '00000-0000',
        amigos: ['Tássio', 'Larissa', 'Andrielle', 'Ysmael']
    },
    {
        nome: 'Ysmael',
        idade: 24,
        telefone: '00000-0000',
        amigos: ['Tássio', 'Larissa', 'Andrielle', 'Marcelo']
    }
];

console.log(cadastro);
