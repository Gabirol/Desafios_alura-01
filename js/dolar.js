/**** TREINANDO FUNÇÃO E PARAMETRO - Alterar valor em index.html <script src=".js" defer></script> para dolar.js ****/

// API para a cotação do dolar.
const cotacaoAtual = async() => {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL';
    
    const response = await fetch(url);
    const dolar = await response.json();
    return dolar.USDBRL.high;  
}

let cotacaoDolar;

async function atualizarCotacao() {
    cotacaoDolar = await cotacaoAtual();
    console.log(`Cotação Salva: ${cotacaoDolar}`);
}


// Funções de calculos.
function conversorDolar(dolar) {
    return dolar * cotacaoDolar;
}
function conversorReal(real) {
    return real / cotacaoDolar;
}

// Funções de mensagem.
function mensagemDolarParaReal(dolar, resultado) {
    alert(`O valor de ${dolar} dolares, é o que vale a ${resultado.toFixed(2)} reais.`);
}
function mensagemRealParaDolar(real, resultado) {
    alert(`O valor de ${real} reais, é o que vale a ${resultado.toFixed(2)} dolares.`);
}

async function main() {
    await atualizarCotacao();
    alert("Conversor de moedas");

    // Criei uma vareavel para que o usuario escolha o tipo de conversão.
    let tipoConv = prompt(
        "Escolha o tipo de conversão:\n" +
        "1 - Dólar → Real\n" +
        "2 - Real → Dólar"
        );

    if(tipoConv == 1) {
        const Vdolar = Number(prompt("Qual o valor você deseja converter?"));
        const resultado = conversorDolar(Vdolar);
        mensagemDolarParaReal(Vdolar, resultado);

    } else if(tipoConv == 2){
        const Vreais = Number(prompt("Qual o valor você deseja converter?"));
        const resultado = conversorReal(Vreais);
        mensagemRealParaDolar(Vreais, resultado);

    } else {
        alert("Opção invalida.")
    }
}

main();