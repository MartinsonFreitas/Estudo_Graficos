export class dados{

    constructor(){
        this.dados = [
            ['Alunos Aprovados', '2020', '2021', '2022', '2023'],
            ['Engenharia Elétrica', 43, 85, 93, 55],
            ['Engenharia Civil', 83, 73, 55, 33],
            ['Engenharia Mecânica', 86, 65, 82, 66],
            ['Engenharia de Produção', 72, 53, 39, 77]
        ];
    }

    retornaDados(){
        return this.dados;
    }
}