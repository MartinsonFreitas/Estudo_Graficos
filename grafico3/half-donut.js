import * as dados from './source.js';

let aux = new dados.dados();
let valor = aux.retornaDados();

console.log(aux.retornaDados());
console.log(valor);

var dom = document.getElementById('container');
  var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });
  
  var app = {};
  var option;  
  
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      // doesn't perfectly work with our tricks, disable it
      selectedMode: false
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '70%'],
        // adjust the start angle
        startAngle: 180,
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + ' (' + param.percent * 2 + '%)';
          }
        },
        data: [
          // local para colocar os blocos de dados
          /* */
          { value: 848, name: 'Engenharia Elétrica' },
          { value: 735, name: 'Engenharia Civil' },
          { value: 580, name: 'Engenharia Mecânica' },
          { value: 484, name: 'Engenharia Química' },
          { value: 300, name: 'Engenharia de Sistemas e Computação' },
          { value: 230, name: 'Engenharia Cartográfica' },
          { value: 120, name: 'Engenharia de Produção' },
          /**/
          //  aux.retornaDados(),
          {
            // make an record to fill the bottom 50%
            value: 1048 + 735 + 580 + 484 + 300,
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
        ]
      }
    ]
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);