import * as dados from './source.js';

export default class ChartGenerator {
  constructor(containerId) {
      this.dataInstance = new dados.dados();
      this.container = document.getElementById(containerId);
      this.chart = echarts.init(this.container, null, {
          renderer: 'canvas',
          useDirtyRect: false
      });
      this.option = {
          dataset: {
              source: this.dataInstance.retornaDados(),
          },
          grid: { containLabel: true },
          xAxis: { name: 'valor' },
          yAxis: { type: 'category' },
          visualMap: {
              orient: 'horizontal',
              left: 'center',
              min: 10,
              max: 100,
              dimension: 0,
              inRange: {
                  color: ['#65B581', '#FFCE34', '#FD665F']
              }
          },
          series: [
              {
                  type: 'bar',
                  encode: {
                      x: 'valor',
                      y: 'rotulo'
                  }
              }
          ]
      };

      if (this.option && typeof this.option === 'object') {
          this.chart.setOption(this.option);
      }

      window.addEventListener('resize', () => this.chart.resize());
  }
}

// Uso da classe ChartGenerator
const chartInstance = new ChartGenerator('container');
