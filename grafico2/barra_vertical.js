import * as dados from './source.js';

let aux = new dados.dados();

console.log(aux.retornaDados());

var dom = document.getElementById('container');
  var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });
  
  var app = {};
  var option;  
  
  option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: aux.retornaDados(),
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);