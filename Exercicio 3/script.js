function calcularFaturamento() {
    fetch('faturamento.json')
        .then(response => response.json())
        .then(faturamento => {
            //Aqui ele filtra os dias com faturamento maior que 0
            const diasComFaturamento = faturamento.filter(d => d.valor > 0);

            //Calcula o maior e o menor valor de faturamento
            const menorFaturamento = Math.min(...diasComFaturamento.map(d => d.valor));
            const maiorFaturamento = Math.max(...diasComFaturamento.map(d => d.valor));

            //A média mensal
            const somaFaturamento = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0);
            const mediaMensal = somaFaturamento / diasComFaturamento.length;

            //O número de dias com faturamente maior que a media mensal
            const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;

            //Resultados
            document.getElementById('resultado').innerHTML = `
                <p>Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}</p>
                <p>Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}</p>
                <p>Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}</p>
            `;
        })
        //Vai que dá erro...
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
}
