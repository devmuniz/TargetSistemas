function calcularPercentuais() {
            
            const faturamento = {
                "SP": 67836.43,
                "RJ": 36678.66,
                "MG": 29229.88,
                "ES": 27165.48,
                "Outros": 19849.53
            };

            //Total dos vaturamentos
            const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

            //limpa resultados anteriores
            document.getElementById('resultados').innerHTML = "";

            //calcula e exibe o resultado de cada estado
            for (let estado in faturamento) {
                const percentual = (faturamento[estado] / totalFaturamento) * 100;
                const resultado = document.createElement('p');
                resultado.textContent = `Estado: ${estado} - Percentual: ${percentual.toFixed(2)}%`;
                document.getElementById('resultados').appendChild(resultado);
            }
        }
   