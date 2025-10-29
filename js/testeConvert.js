const cotacaoAtual = async() => {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL';
    
    const response = await fetch(url);
    const dolar = await response.json();
    return dolar.USDBRL.high;  
}

let valorDolar;

async function atualizarCotacao() {
    valorDolar = await cotacaoAtual();
    console.log(`Cotação Salva: ${valorDolar}`);
}

function conversorDolar() {
    const cotacaoDolar = valorDolar;
    return 50 * cotacaoDolar;
}

async function main() {
    await atualizarCotacao();
    console.log(`Valor em Reais: ${conversorDolar().toFixed(2)}`);
}   

main();