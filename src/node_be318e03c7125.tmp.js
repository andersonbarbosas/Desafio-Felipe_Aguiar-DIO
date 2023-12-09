console.log("This is the Chalanger Of Hero - DIO")

console.log("Our Hero, currently is on the **Fase 4** the he journey")
console.log("Let's check your rating together?")

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu nome e sobrenome: ", function(userName) {
    // Converte o nome para minúsculas e remove espaços
    const nomeSemEspacos = userName.toLowerCase().replace(/\s/g, '');

    // Função para calcular o valor de uma letra
    function calcularValorLetra(letra) {
        return letra.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    // Função para calcular o valor total de uma palavra
    function calcularValorPalavra(palavra) {
        const letras = palavra.split('');
        return letras.reduce((total, letra) => total + calcularValorLetra(letra), 0);
    }

    // Calcula o valor total do nome
    const valorTotalNome = calcularValorPalavra(nomeSemEspacos);

    // Exibe os resultados
    console.log("Regras de A-Z: a=1, b=2, c=3, ...");
    console.log(`Substituindo as letras do nome "${userName}" pelos números referentes:`);
    console.log(`Valor total do nome: ${valorTotalNome}`);

    rl.close();
});

let password = 4500
console.log(password)

if (password == 1000){
        console.log("Ferro");
    } else if (password >= 1001 && password <= 2000) {
        console.log("Bronze");
    } else if (password >= 2001 && password <= 5000) {
        console.log("Prata");
    } else if (password >= 5001 && password <= 7000) {
        console.log("Ouro");
    } else if (password >= 7001 && password <= 8000) {
        console.log("Platina");
    } else if (password >= 8001 && password <= 9000) {
        console.log("Ascendente");
    } else if (password >= 9001 && password <= 10000) {
        console.log("Imortal");
    } else if (password >= 10001) {
        console.log("Radiante");
}


function UserName(){
    console.log()



}