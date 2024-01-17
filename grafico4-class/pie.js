// Seu código com dados externos

import dados from './source.js';

class ChartGenerator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.chart = echarts.init(this.container, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        this.option = {
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
                    data: dados.retornaDados(),
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

        if (this.option && typeof this.option === 'object') {
            this.chart.setOption(this.option);
        }

        window.addEventListener('resize', () => this.chart.resize());
    }
}

// Uso da classe ChartGenerator
const chartInstance = new ChartGenerator('container');
