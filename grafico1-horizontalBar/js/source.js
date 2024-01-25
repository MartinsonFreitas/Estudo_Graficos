export class dados{

    constructor(){
        this.dados = [
            ['score', 'valor', 'rotulo'],
            [89.3, 58212, 'Engenharia Elétrica'],
            [57.1, 78254, 'Engenharia de Computação'],
            [74.4, 41032, 'Engenharia Mecânica'],
            [50.1, 12755, 'Engenharia Civil'],
            [89.7, 20145, 'Engenharia de Produção'],
            [68.1, 79146, 'Egenharia Química'],
            [19.6, 91852, 'Engenharia de Materiais'],
            [10.6, 101852, 'Engenharia Ambiental'],
            [32.7, 20112, 'Engenharia Cartográfica'],
            [18.5, 15005, 'Engenharia Metalúrgica']
        ];
    }

    retornaDados(){
        return this.dados;
    }
}