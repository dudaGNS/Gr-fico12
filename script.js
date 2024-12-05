document.addEventListener("DOMContentLoaded", function () {
    // Dados de exemplo
    const dados = {
        labels: ["Exemplo 1", "Exemplo 2"],
        valores: [50, 30]
    };

    // Configuração do Gráfico de Barras
    const ctxBarra = document.getElementById('graficoBarra').getContext('2d');
    new Chart(ctxBarra, {
        type: 'bar',
        data: {
            labels: dados.labels,
            datasets: [{
                label: 'Valores',
                data: dados.valores,
                backgroundColor: ['#007bff', '#28a745']
            }]
        },
        options: {
            responsive: true
        }
    });

    // Configuração do Gráfico de Pizza
    const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
    new Chart(ctxPizza, {
        type: 'pie',
        data: {
            labels: dados.labels,
            datasets: [{
                data: dados.valores,
                backgroundColor: ['#007bff', '#28a745']
            }]
        },
        options: {
            responsive: true
        }
    });
});