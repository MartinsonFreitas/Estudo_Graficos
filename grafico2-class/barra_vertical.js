import * as dados from './source.js';

class DadosHandler {
    constructor() {
        this.dadosInstance = new dados.dados();
    }

    processaDados() {
        return this.dadosInstance.retornaDados();
    }
}

class ChartGenerator {
    constructor(containerId, dadosHandler) {
        this.container = document.getElementById(containerId);
        this.chart = echarts.init(this.container, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        this.dadosHandler = dadosHandler;
        this.option = {
            legend: {},
            tooltip: {},
            dataset: {
                source: this.dadosHandler.processaDados(),
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
        };

        if (this.option && typeof this.option === 'object') {
            this.chart.setOption(this.option);
        }

        window.addEventListener('resize', () => this.chart.resize());
    }
}

// Uso das classes DadosHandler e ChartGenerator
const dadosHandlerInstance = new DadosHandler();
const chartInstance = new ChartGenerator('container', dadosHandlerInstance);
