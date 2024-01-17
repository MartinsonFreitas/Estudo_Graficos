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
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          // local para colocar os blocos de dados
          /* */
          { value: 1048, name: 'Engenharia Elétrica' },
          { value: 735, name: 'Engenharia Civil' },
          { value: 580, name: 'Engenharia Mecânica' },
          { value: 484, name: 'Engenharia Química' },
          { value: 300, name: 'Engenharia de Sistemas e Computação' },
          { value: 230, name: 'Engenharia Cartográfica' },
          { value: 120, name: 'Engenharia de Produção' }
          /**/
          //  aux.retornaDados(),
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);