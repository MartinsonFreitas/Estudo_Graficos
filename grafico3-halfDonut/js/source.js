// source.js

const dados = {
    retornaDados: function() {
        return [
            { value: 1048, name: 'Engenharia Elétrica' },
            { value: 735, name: 'Engenharia Civil' },
            { value: 580, name: 'Engenharia Mecânica' },
            { value: 484, name: 'Engenharia Química' },
            { value: 300, name: 'Engenharia de Sistemas e Computação' },
            { value: 230, name: 'Engenharia Cartográfica' },
            { value: 120, name: 'Engenharia de Produção' },
            {
                // make an record to fill the bottom 50%
                value: 1048 + 735 + 580 + 484 + 300 + 230 + 120,
                itemStyle: {
                  // stop the chart from rendering this piece
                  color: 'none',
                  decal: {
                    symbol: 'none'
                  }
                },
                label: {
                  show: false
                }
              }
        ];
    }
};

export default dados;
