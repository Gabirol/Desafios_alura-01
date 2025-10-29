/**** TREINANDO FUNÇÃO E PARAMETRO - Alterar valor em index.html <script src=".js" defer></script> para imc.js ****/

// Função do calculo.
function calcularIMC(peso, altura) {
    return peso / (altura* altura);    
}

// Função para classificar o imc.
function classificarIMC(imc) {
    if(imc < 18.5) return "Abaixo do peso";
    else if(imc < 25) return "Peso normal";
    else if(imc < 30) return "Sobre Peso";
    else if(imc < 35) return "Obesidade grau I";
    else if(imc < 40) return "Obesidade grau II";
    else return "Obesidade grau III";
}

// Função que exibe a mensagem.
function exibirResultado(imc, classificacao) {
    alert(`Seu IMC é ${imc.toFixed(2)} | Classificação: ${classificacao}`);
}

function main() {
    alert("Calculadora de IMC");

    // Coleta os dados com o usuário.
    const altura = Number(prompt("Qual a sua altura em metros?"));
    const peso = Number(prompt("Qual o seu peso em Kg?"));
    
    // Cria as varieveis que iram reseber os valores das funçoes de calculo.
    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);
    // Retorar a mensagem com os dados coletado.
    exibirResultado(imc, classificacao);
}

main();
