/**** TREINANDO FUNÇÃO E PARAMETRO - Alterar valor em index.html <script src=".js" defer></script> para area.js ****/
// Para treinar, separei a opeção em 4 funções, uma para calcular a area, outra o perimetro, uma para exiber a mensagem e por fim uma principal, que recebe e retorna os valores para as funções anteriores. 

// Realiza o calculo da area.
function calcArea(altura, largura) {
    return altura * largura;
}

// Realiza o calculo do Perimetro.
function calcularPerimetro(altura, largura) {
    return 2 * (altura + largura);
}

// Retorna a mensagem com os resultados
function exibirResultado(area, perimetro) {
    alert(
        `Resultado das medidas informadas:\n` +
        `Área: ${area.toFixed(2)} m²\n` +
        `Perímetro: ${perimetro.toFixed(2)} m`
    );
}

// Coleta e direciona os valores para as variaveis.
function main() {
    alert("Calculadora de Área e Perímetro de uma Sala");

    // Coleta os valores.
    const altura = Number(prompt("Qual a altura (em metros) do comodo?"));
    const largura = Number(prompt("Qual a lartura (em metros) do comodo?"));

    // Mensagem de erro caso os valores enviados sejam incorretos.
    if (isNaN(altura) || isNaN(largura) || altura <= 0 || largura <= 0) {
        alert("Valores inválidos! Digite números positivos.");
        return;
    }

    // Cria a vareavel que sera utiliza na mensagem.
    const area = calcArea(altura, largura);
    const perimetro = calcularPerimetro(altura, largura);
    // Retorna os dados das variaveis de calculo.
    exibirResultado(area, perimetro);
}

main();