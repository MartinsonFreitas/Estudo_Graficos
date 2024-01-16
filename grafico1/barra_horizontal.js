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
  dataset: {
    source: aux.retornaDados(),
    },

  grid: { containLabel: true },
  xAxis: { name: 'valor' },
  yAxis: { type: 'category' },
  visualMap: {
  orient: 'horizontal',
  left: 'center',
  min: 10,
  max: 100,
  //text: ['Score Alto', 'Score Baixo'],
  // Map the score column to color
  dimension: 0,
  inRange: {
    color: ['#65B581', '#FFCE34', '#FD665F']
    //color: ['#191970', '#00BFFF', '#008080']
    //color: ['#00FF7F', '#00FFFF', '#2F4F4F']
  }
  },
  series: [
  {
    type: 'bar',
    encode: {
      // Map the "amount" column to X axis.
      x: 'valor',
      // Map the "product" column to Y axis
      y: 'rotulo'
    }
  }
  ]
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);