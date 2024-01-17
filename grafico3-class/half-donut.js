import dados from './source.js';

class ChartGenerator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.chart = echarts.init(this.container, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        this.option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center',
                selectedMode: false
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '70%'],
                    startAngle: 180,
                    label: {
                        show: true,
                        formatter(param) {
                            return param.name + ' (' + param.percent * 2 + '%)';
                        }
                    },
                    data: dados.retornaDados()
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
