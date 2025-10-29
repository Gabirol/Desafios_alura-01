/**** TREINANDO FUNÇÃO E PARAMETRO - Alterar valor em index.html <script src=".js" defer></script> para fatorial.js ****/

// Função do calculo.
function fatorialCalc(numero) {
    let fatorial = 1;
    let contador = numero;

    // Loop para realizar o calculo fatorial, já que para realizar esse calculo ele tem que multiplicar todos os numeros anteriores a ele, por isso o contador subtrai um valor.
    while (contador > 1) {
        fatorial *= contador;
        contador--;
    }

    return fatorial;
}

function mensagem(numero, resultado) {
    alert(`O resultado do fatorial de ${numero} é ${resultado}`);
}

function main() {
    alert("Calculadora de Fatorial");

    // Coleta o valor do usuario.
    const numeroInicial = Number(prompt("Qual número deseja calcular o fatorial?"));

    // Substitue o parametro "numero" pela vareavel "numeroInicial".
    const resultado = fatorialCalc(numeroInicial);
    // Retorna a mensagem com os valores.
    mensagem(numeroInicial, resultado);
}

main();
